using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistance;

namespace Application.Activities
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Activity Activity { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _ctx;
            private readonly IMapper _mapper;

            public Handler(
                DataContext ctx,
                IMapper mapper)
            {
                _ctx = ctx;
                _mapper = mapper;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _ctx.Activities.FindAsync(request.Activity.Id);

                _mapper.Map(request.Activity, activity);

                await _ctx.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
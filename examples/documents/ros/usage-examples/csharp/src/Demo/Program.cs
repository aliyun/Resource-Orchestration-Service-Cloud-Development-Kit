using AlibabaCloud.SDK.ROS.CDK.Core;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Demo
{
    sealed class Program
    {
        public static void Main(string[] args)
        {
            var app = new App();
            new DemoStack(app, "DemoStack");
            app.Synth();
        }
    }
}

using Aliyun.Ros.CDK.Core;
using Demo;
using NUnit.Framework;

namespace Stack.UnitTests.Services
{
    [TestFixture]
    public class Stack_IsStackShould
    {
        [Test]
        public void DemoStack_IsStackShould()
        {
            var app = new App();
            var demoStack = new DemoStack(app, "TestStack");
            var result = app.Synth().GetStackArtifact(demoStack.ArtifactId).Template;
            Assert.AreEqual(result, "foo");
        }
    }
}
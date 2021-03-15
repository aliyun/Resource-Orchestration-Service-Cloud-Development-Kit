using AlibabaCloud.SDK.ROS.CDK.Core;
using NUnit.Framework;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Demo;


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
            var expectedJson = JsonConvert.SerializeObject(result);
            JObject obj = new JObject();
            obj.Add("ROSTemplateFormatVersion", "2015-09-01");
            var actual = JsonConvert.SerializeObject(obj);
            Assert.AreEqual(expectedJson, actual);
        }
    }
}

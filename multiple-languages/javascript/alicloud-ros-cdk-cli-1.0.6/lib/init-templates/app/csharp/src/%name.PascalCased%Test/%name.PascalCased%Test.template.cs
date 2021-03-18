using AlibabaCloud.SDK.ROS.CDK.Core;
using NUnit.Framework;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using %name.PascalCased%;

namespace Stack.UnitTests.Services
{
    [TestFixture]
    public class Stack_IsStackShould
    {
        [Test]
        public void DemoStack_IsStackShould()
        {
            var app = new App();
            var testStack = new %name.PascalCased%Stack(app, "TestStack");
            var result = app.Synth().GetStackArtifact(testStack.ArtifactId).Template;
            var actualJson = JsonConvert.SerializeObject(result);
            JObject obj = new JObject();
            obj.Add("ROSTemplateFormatVersion", "2015-09-01");
            var expected = JsonConvert.SerializeObject(obj);
            Assert.AreEqual(actualJson, expected);
        }
    }
}


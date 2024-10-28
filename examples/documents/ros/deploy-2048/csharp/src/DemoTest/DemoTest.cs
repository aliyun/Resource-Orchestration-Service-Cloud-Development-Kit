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
            var testStack = new DemoStack(app, "TestStack");
            var result = app.Synth().GetStackArtifact(testStack.ArtifactId).Template;
            var actualJson = JsonConvert.SerializeObject(result);
            JObject obj = new JObject();
            JObject metadata = new JObject();
            JObject rosInterface = new JObject();
            JArray templateTags = new JArray();
            metadata.Add("ALIYUN::ROS::Interface", rosInterface);
            rosInterface.Add("TemplateTags", templateTags);
            templateTags.Add("Create by ROS CDK");
            obj.Add("Metadata", metadata);
            obj.Add("ROSTemplateFormatVersion", "2015-09-01");
            var expected = JsonConvert.SerializeObject(obj);
            Assert.AreEqual(actualJson, expected);
        }
    }
}

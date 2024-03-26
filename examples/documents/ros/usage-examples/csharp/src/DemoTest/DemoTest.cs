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
            JObject Resources = new JObject();
            JObject VPC = new JObject();
            JObject VSW = new JObject();
            JObject vpcProperties = new JObject();
            JObject vswProperties = new JObject();
            JObject metadata = new JObject();
            JObject rosInterface = new JObject();
            JArray templateTags = new JArray();
            JObject vpcId = new JObject();
            metadata.Add("ALIYUN::ROS::Interface", rosInterface);
            rosInterface.Add("TemplateTags", templateTags);
            templateTags.Add("Create by ROS CDK");
            obj.Add("Metadata", metadata);
            VPC.Add("Type", "ALIYUN::ECS::VPC");
            VPC.Add("Properties", vpcProperties);
            Resources.Add("vpc-from-ros-cdk", VPC);
            vpcProperties.Add("CidrBlock", "10.0.0.0/8");
            vpcProperties.Add("Description", "This is ros cdk test");
            vpcProperties.Add("EnableIpv6", false);
            vpcProperties.Add("VpcName", "test-ros-cdk-csharp");
            VSW.Add("Type", "ALIYUN::ECS::VSwitch");
            VSW.Add("Properties", vswProperties);
            Resources.Add("vsw-from-ros-cdk", VSW);
            vswProperties.Add("CidrBlock", "10.0.0.0/16");
            vpcId.Add("Ref", "vpc-from-ros-cdk");
            vswProperties.Add("VpcId", vpcId);
            vswProperties.Add("ZoneId", "cn-hangzhou-i");
            vswProperties.Add("VSwitchName", "test-ros-cdk-csharp");
            obj.Add("ROSTemplateFormatVersion", "2015-09-01");
            obj.Add("Resources", Resources);
            var expected = JsonConvert.SerializeObject(obj);
            Assert.AreEqual(actualJson, expected);
        }
    }
}
using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `LaunchTemplate`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-launchtemplate
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.datasource.LaunchTemplateProps")]
    public class LaunchTemplateProps : AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.ILaunchTemplateProps
    {
        private object _launchTemplateId;

        /// <summary>Property launchTemplateId: Template ID.</summary>
        [JsiiProperty(name: "launchTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object LaunchTemplateId
        {
            get => _launchTemplateId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _launchTemplateId = value;
            }
        }
    }
}

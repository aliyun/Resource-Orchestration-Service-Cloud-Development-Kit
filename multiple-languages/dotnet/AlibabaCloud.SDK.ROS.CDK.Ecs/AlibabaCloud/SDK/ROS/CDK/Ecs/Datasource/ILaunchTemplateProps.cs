using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `LaunchTemplate`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-launchtemplate
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ILaunchTemplateProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.LaunchTemplateProps")]
    public interface ILaunchTemplateProps
    {
        /// <summary>Property launchTemplateId: Template ID.</summary>
        [JsiiProperty(name: "launchTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LaunchTemplateId
        {
            get;
        }

        /// <summary>Properties for defining a `LaunchTemplate`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-launchtemplate
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ILaunchTemplateProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.LaunchTemplateProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.ILaunchTemplateProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property launchTemplateId: Template ID.</summary>
            [JsiiProperty(name: "launchTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LaunchTemplateId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

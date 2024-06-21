using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `RosLaunchTemplate`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-launchtemplate
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosLaunchTemplateProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.RosLaunchTemplateProps")]
    public interface IRosLaunchTemplateProps
    {
        /// <remarks>
        /// <strong>Property</strong>: launchTemplateId: Template ID.
        /// </remarks>
        [JsiiProperty(name: "launchTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LaunchTemplateId
        {
            get;
        }

        /// <summary>Properties for defining a `RosLaunchTemplate`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-launchtemplate
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosLaunchTemplateProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.RosLaunchTemplateProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IRosLaunchTemplateProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: launchTemplateId: Template ID.
            /// </remarks>
            [JsiiProperty(name: "launchTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LaunchTemplateId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

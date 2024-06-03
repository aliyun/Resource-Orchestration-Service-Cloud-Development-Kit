using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `RosDeploymentSet`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-deploymentset
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDeploymentSetProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.RosDeploymentSetProps")]
    public interface IRosDeploymentSetProps
    {
        /// <remarks>
        /// <strong>Property</strong>: deploymentSetId: The ID of deployment set.
        /// </remarks>
        [JsiiProperty(name: "deploymentSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DeploymentSetId
        {
            get;
        }

        /// <summary>Properties for defining a `RosDeploymentSet`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-deploymentset
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDeploymentSetProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.RosDeploymentSetProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IRosDeploymentSetProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: deploymentSetId: The ID of deployment set.
            /// </remarks>
            [JsiiProperty(name: "deploymentSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DeploymentSetId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

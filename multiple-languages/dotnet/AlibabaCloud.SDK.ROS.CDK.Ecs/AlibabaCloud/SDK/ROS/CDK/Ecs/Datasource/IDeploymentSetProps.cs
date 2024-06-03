using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `DeploymentSet`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-deploymentset
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDeploymentSetProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.DeploymentSetProps")]
    public interface IDeploymentSetProps
    {
        /// <summary>Property deploymentSetId: The ID of deployment set.</summary>
        [JsiiProperty(name: "deploymentSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DeploymentSetId
        {
            get;
        }

        /// <summary>Properties for defining a `DeploymentSet`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-deploymentset
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDeploymentSetProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.DeploymentSetProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IDeploymentSetProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property deploymentSetId: The ID of deployment set.</summary>
            [JsiiProperty(name: "deploymentSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DeploymentSetId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

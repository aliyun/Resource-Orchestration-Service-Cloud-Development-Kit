using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `SecurityGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-securitygroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISecurityGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.SecurityGroupProps")]
    public interface ISecurityGroupProps
    {
        /// <summary>Property securityGroupId: Security group ID.</summary>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SecurityGroupId
        {
            get;
        }

        /// <summary>Properties for defining a `SecurityGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-securitygroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISecurityGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.SecurityGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.ISecurityGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property securityGroupId: Security group ID.</summary>
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SecurityGroupId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

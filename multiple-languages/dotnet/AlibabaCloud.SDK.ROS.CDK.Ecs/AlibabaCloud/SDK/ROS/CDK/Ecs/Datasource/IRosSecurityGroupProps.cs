using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `RosSecurityGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-securitygroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosSecurityGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.RosSecurityGroupProps")]
    public interface IRosSecurityGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: securityGroupId: Security group ID.
        /// </remarks>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SecurityGroupId
        {
            get;
        }

        /// <summary>Properties for defining a `RosSecurityGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-securitygroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosSecurityGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.RosSecurityGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IRosSecurityGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: securityGroupId: Security group ID.
            /// </remarks>
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SecurityGroupId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

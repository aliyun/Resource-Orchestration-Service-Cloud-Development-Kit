using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Properties for defining a `RosDelegatedAdministrator`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-delegatedadministrator
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDelegatedAdministratorProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosDelegatedAdministratorProps")]
    public interface IRosDelegatedAdministratorProps
    {
        /// <remarks>
        /// <strong>Property</strong>: accountId: The Alibaba Cloud account ID of the member in the resource directory.
        /// </remarks>
        [JsiiProperty(name: "accountId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccountId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: servicePrincipal: The identifier of the trusted service.
        /// </remarks>
        [JsiiProperty(name: "servicePrincipal", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ServicePrincipal
        {
            get;
        }

        /// <summary>Properties for defining a `RosDelegatedAdministrator`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-delegatedadministrator
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDelegatedAdministratorProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosDelegatedAdministratorProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IRosDelegatedAdministratorProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: accountId: The Alibaba Cloud account ID of the member in the resource directory.
            /// </remarks>
            [JsiiProperty(name: "accountId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccountId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: servicePrincipal: The identifier of the trusted service.
            /// </remarks>
            [JsiiProperty(name: "servicePrincipal", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServicePrincipal
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

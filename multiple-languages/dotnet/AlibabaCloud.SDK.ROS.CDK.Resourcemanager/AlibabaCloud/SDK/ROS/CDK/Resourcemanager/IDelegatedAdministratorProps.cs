using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Properties for defining a `DelegatedAdministrator`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-delegatedadministrator
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDelegatedAdministratorProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.DelegatedAdministratorProps")]
    public interface IDelegatedAdministratorProps
    {
        /// <summary>Property accountId: The Alibaba Cloud account ID of the member in the resource directory.</summary>
        [JsiiProperty(name: "accountId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccountId
        {
            get;
        }

        /// <summary>Property servicePrincipal: The identifier of the trusted service.</summary>
        [JsiiProperty(name: "servicePrincipal", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ServicePrincipal
        {
            get;
        }

        /// <summary>Properties for defining a `DelegatedAdministrator`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-delegatedadministrator
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDelegatedAdministratorProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.DelegatedAdministratorProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IDelegatedAdministratorProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property accountId: The Alibaba Cloud account ID of the member in the resource directory.</summary>
            [JsiiProperty(name: "accountId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccountId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property servicePrincipal: The identifier of the trusted service.</summary>
            [JsiiProperty(name: "servicePrincipal", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServicePrincipal
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

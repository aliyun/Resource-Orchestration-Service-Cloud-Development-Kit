using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    /// <summary>Any object that has an associated principal that a permission can be granted to.</summary>
    [JsiiInterface(nativeType: typeof(IGrantable), fullyQualifiedName: "@alicloud/ros-cdk-ram.IGrantable")]
    public interface IGrantable
    {
        /// <summary>The principal to grant permissions to.</summary>
        [JsiiProperty(name: "grantPrincipal", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ram.IPrincipal\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ram.IPrincipal GrantPrincipal
        {
            get;
        }

        /// <summary>Any object that has an associated principal that a permission can be granted to.</summary>
        [JsiiTypeProxy(nativeType: typeof(IGrantable), fullyQualifiedName: "@alicloud/ros-cdk-ram.IGrantable")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.IGrantable
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>The principal to grant permissions to.</summary>
            [JsiiProperty(name: "grantPrincipal", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ram.IPrincipal\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ram.IPrincipal GrantPrincipal
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ram.IPrincipal>()!;
            }
        }
    }
}

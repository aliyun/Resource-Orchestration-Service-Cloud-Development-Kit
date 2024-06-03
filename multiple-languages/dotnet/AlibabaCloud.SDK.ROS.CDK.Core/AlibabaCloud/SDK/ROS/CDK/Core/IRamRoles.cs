using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiInterface(nativeType: typeof(IRamRoles), fullyQualifiedName: "@alicloud/ros-cdk-core.RamRoles")]
    public interface IRamRoles
    {
        /// <summary>The RAM role ARN that grants FC function the required permissions.</summary>
        [JsiiProperty(name: "fcRole", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        AlibabaCloud.SDK.ROS.CDK.Core.IResolvable FcRole
        {
            get;
        }

        [JsiiTypeProxy(nativeType: typeof(IRamRoles), fullyQualifiedName: "@alicloud/ros-cdk-core.RamRoles")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IRamRoles
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>The RAM role ARN that grants FC function the required permissions.</summary>
            [JsiiProperty(name: "fcRole", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResolvable FcRole
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
            }
        }
    }
}

using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    /// <summary>Properties for defining a `ALIYUN::SAG::ACLAssociation`.</summary>
    [JsiiInterface(nativeType: typeof(IACLAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.ACLAssociationProps")]
    public interface IACLAssociationProps
    {
        /// <summary>Property aclId: Access control ID.</summary>
        [JsiiProperty(name: "aclId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AclId
        {
            get;
        }

        /// <summary>Property smartAgId: An intelligent gateway instance that needs to bind access control.</summary>
        [JsiiProperty(name: "smartAgId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SmartAgId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::SAG::ACLAssociation`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IACLAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.ACLAssociationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sag.IACLAssociationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property aclId: Access control ID.</summary>
            [JsiiProperty(name: "aclId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AclId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property smartAgId: An intelligent gateway instance that needs to bind access control.</summary>
            [JsiiProperty(name: "smartAgId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SmartAgId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

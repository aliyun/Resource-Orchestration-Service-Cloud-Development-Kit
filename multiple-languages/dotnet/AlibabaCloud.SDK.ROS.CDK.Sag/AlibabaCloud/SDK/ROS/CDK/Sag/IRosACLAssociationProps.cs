using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    /// <summary>Properties for defining a `ALIYUN::SAG::ACLAssociation`.</summary>
    [JsiiInterface(nativeType: typeof(IRosACLAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.RosACLAssociationProps")]
    public interface IRosACLAssociationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: aclId: Access control ID.
        /// </remarks>
        [JsiiProperty(name: "aclId", typeJson: "{\"primitive\":\"string\"}")]
        string AclId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: smartAgId: An intelligent gateway instance that needs to bind access control.
        /// </remarks>
        [JsiiProperty(name: "smartAgId", typeJson: "{\"primitive\":\"string\"}")]
        string SmartAgId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::SAG::ACLAssociation`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosACLAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.RosACLAssociationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sag.IRosACLAssociationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: aclId: Access control ID.
            /// </remarks>
            [JsiiProperty(name: "aclId", typeJson: "{\"primitive\":\"string\"}")]
            public string AclId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: smartAgId: An intelligent gateway instance that needs to bind access control.
            /// </remarks>
            [JsiiProperty(name: "smartAgId", typeJson: "{\"primitive\":\"string\"}")]
            public string SmartAgId
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}

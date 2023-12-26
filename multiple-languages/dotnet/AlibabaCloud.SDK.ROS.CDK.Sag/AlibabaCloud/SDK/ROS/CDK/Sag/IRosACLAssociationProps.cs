using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    /// <summary>Properties for defining a `RosACLAssociation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-aclassociation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosACLAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.RosACLAssociationProps")]
    public interface IRosACLAssociationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: aclId: Access control ID.
        /// </remarks>
        [JsiiProperty(name: "aclId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AclId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: smartAgId: An intelligent gateway instance that needs to bind access control.
        /// </remarks>
        [JsiiProperty(name: "smartAgId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SmartAgId
        {
            get;
        }

        /// <summary>Properties for defining a `RosACLAssociation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-aclassociation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosACLAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.RosACLAssociationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sag.IRosACLAssociationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: aclId: Access control ID.
            /// </remarks>
            [JsiiProperty(name: "aclId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AclId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: smartAgId: An intelligent gateway instance that needs to bind access control.
            /// </remarks>
            [JsiiProperty(name: "smartAgId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SmartAgId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

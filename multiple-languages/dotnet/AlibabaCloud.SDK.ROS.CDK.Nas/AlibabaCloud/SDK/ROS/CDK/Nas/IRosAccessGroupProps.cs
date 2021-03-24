using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas
{
    /// <summary>Properties for defining a `ALIYUN::NAS::AccessGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IRosAccessGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.RosAccessGroupProps")]
    public interface IRosAccessGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: accessGroupName: Permission group name
        /// </remarks>
        [JsiiProperty(name: "accessGroupName", typeJson: "{\"primitive\":\"string\"}")]
        string AccessGroupName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: accessGroupType: Permission group type, including the Vpc and Classic types
        /// </remarks>
        [JsiiProperty(name: "accessGroupType", typeJson: "{\"primitive\":\"string\"}")]
        string AccessGroupType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Permission group description. It is the same as the permission group name by default.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::NAS::AccessGroup`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosAccessGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.RosAccessGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nas.IRosAccessGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: accessGroupName: Permission group name
            /// </remarks>
            [JsiiProperty(name: "accessGroupName", typeJson: "{\"primitive\":\"string\"}")]
            public string AccessGroupName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: accessGroupType: Permission group type, including the Vpc and Classic types
            /// </remarks>
            [JsiiProperty(name: "accessGroupType", typeJson: "{\"primitive\":\"string\"}")]
            public string AccessGroupType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Permission group description. It is the same as the permission group name by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}

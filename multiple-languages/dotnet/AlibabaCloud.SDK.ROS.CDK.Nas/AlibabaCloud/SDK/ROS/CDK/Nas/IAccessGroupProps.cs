using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas
{
    /// <summary>Properties for defining a `ALIYUN::NAS::AccessGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IAccessGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.AccessGroupProps")]
    public interface IAccessGroupProps
    {
        /// <summary>Property accessGroupName: Permission group name.</summary>
        [JsiiProperty(name: "accessGroupName", typeJson: "{\"primitive\":\"string\"}")]
        string AccessGroupName
        {
            get;
        }

        /// <summary>Property accessGroupType: Permission group type, including the Vpc and Classic types.</summary>
        [JsiiProperty(name: "accessGroupType", typeJson: "{\"primitive\":\"string\"}")]
        string AccessGroupType
        {
            get;
        }

        /// <summary>Property description: Permission group description.</summary>
        /// <remarks>
        /// It is the same as the permission group name by default.
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
        [JsiiTypeProxy(nativeType: typeof(IAccessGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.AccessGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nas.IAccessGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property accessGroupName: Permission group name.</summary>
            [JsiiProperty(name: "accessGroupName", typeJson: "{\"primitive\":\"string\"}")]
            public string AccessGroupName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property accessGroupType: Permission group type, including the Vpc and Classic types.</summary>
            [JsiiProperty(name: "accessGroupType", typeJson: "{\"primitive\":\"string\"}")]
            public string AccessGroupType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property description: Permission group description.</summary>
            /// <remarks>
            /// It is the same as the permission group name by default.
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

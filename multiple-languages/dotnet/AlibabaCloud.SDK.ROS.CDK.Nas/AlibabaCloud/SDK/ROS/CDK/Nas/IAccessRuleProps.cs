using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas
{
    /// <summary>Properties for defining a `ALIYUN::NAS::AccessRule`.</summary>
    [JsiiInterface(nativeType: typeof(IAccessRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.AccessRuleProps")]
    public interface IAccessRuleProps
    {
        /// <summary>Property accessGroupName: Permission group name.</summary>
        [JsiiProperty(name: "accessGroupName", typeJson: "{\"primitive\":\"string\"}")]
        string AccessGroupName
        {
            get;
        }

        /// <summary>Property sourceCidrIp: Address or address segment.</summary>
        [JsiiProperty(name: "sourceCidrIp", typeJson: "{\"primitive\":\"string\"}")]
        string SourceCidrIp
        {
            get;
        }

        /// <summary>Property priority: Priority level.</summary>
        /// <remarks>
        /// Range: 1-100. Default value: 1
        /// </remarks>
        [JsiiProperty(name: "priority", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Priority
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property rwAccessType: Read-write permission type: RDWR (default), RDONLY.</summary>
        [JsiiProperty(name: "rwAccessType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? RwAccessType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property userAccessType: User permission type: no_squash (default), root_squash, all_squash.</summary>
        [JsiiProperty(name: "userAccessType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? UserAccessType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::NAS::AccessRule`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAccessRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.AccessRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nas.IAccessRuleProps
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

            /// <summary>Property sourceCidrIp: Address or address segment.</summary>
            [JsiiProperty(name: "sourceCidrIp", typeJson: "{\"primitive\":\"string\"}")]
            public string SourceCidrIp
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property priority: Priority level.</summary>
            /// <remarks>
            /// Range: 1-100. Default value: 1
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "priority", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Priority
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property rwAccessType: Read-write permission type: RDWR (default), RDONLY.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "rwAccessType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? RwAccessType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property userAccessType: User permission type: no_squash (default), root_squash, all_squash.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "userAccessType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? UserAccessType
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}

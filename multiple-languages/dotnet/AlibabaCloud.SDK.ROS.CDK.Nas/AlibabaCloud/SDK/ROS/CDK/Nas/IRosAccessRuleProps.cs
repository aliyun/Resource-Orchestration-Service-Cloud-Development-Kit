using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas
{
    /// <summary>Properties for defining a `ALIYUN::NAS::AccessRule`.</summary>
    [JsiiInterface(nativeType: typeof(IRosAccessRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.RosAccessRuleProps")]
    public interface IRosAccessRuleProps
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
        /// <strong>Property</strong>: sourceCidrIp: Address or address segment
        /// </remarks>
        [JsiiProperty(name: "sourceCidrIp", typeJson: "{\"primitive\":\"string\"}")]
        string SourceCidrIp
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: priority: Priority level. Range: 1-100. Default value: 1
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

        /// <remarks>
        /// <strong>Property</strong>: rwAccessType: Read-write permission type: RDWR (default), RDONLY
        /// </remarks>
        [JsiiProperty(name: "rwAccessType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? RwAccessType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: userAccessType: User permission type: no_squash (default), root_squash, all_squash
        /// </remarks>
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
        [JsiiTypeProxy(nativeType: typeof(IRosAccessRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.RosAccessRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nas.IRosAccessRuleProps
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
            /// <strong>Property</strong>: sourceCidrIp: Address or address segment
            /// </remarks>
            [JsiiProperty(name: "sourceCidrIp", typeJson: "{\"primitive\":\"string\"}")]
            public string SourceCidrIp
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: priority: Priority level. Range: 1-100. Default value: 1
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "priority", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Priority
            {
                get => GetInstanceProperty<double?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: rwAccessType: Read-write permission type: RDWR (default), RDONLY
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rwAccessType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? RwAccessType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: userAccessType: User permission type: no_squash (default), root_squash, all_squash
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "userAccessType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? UserAccessType
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}

using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cr
{
    /// <summary>Properties for defining a `ALIYUN::CR::InstanceEndpointAclPolicy`.</summary>
    [JsiiInterface(nativeType: typeof(IRosInstanceEndpointAclPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.RosInstanceEndpointAclPolicyProps")]
    public interface IRosInstanceEndpointAclPolicyProps
    {
        /// <remarks>
        /// <strong>Property</strong>: entry: The IP address range that is allowed to access the instance.
        /// </remarks>
        [JsiiProperty(name: "entry", typeJson: "{\"primitive\":\"string\"}")]
        string Entry
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the instance.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
        string InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: comment: The description of the entry.
        /// </remarks>
        [JsiiProperty(name: "comment", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Comment
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: endpointType: The type of the endpoint.
        /// </remarks>
        [JsiiProperty(name: "endpointType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? EndpointType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: moduleName: The name of the module in the instance for which a whitelist is configured. Valid
        /// values: Registry and Chart.
        /// </remarks>
        [JsiiProperty(name: "moduleName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ModuleName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: regionId: Region ID of instance. Default is current region.
        /// </remarks>
        [JsiiProperty(name: "regionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? RegionId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::CR::InstanceEndpointAclPolicy`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosInstanceEndpointAclPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.RosInstanceEndpointAclPolicyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cr.IRosInstanceEndpointAclPolicyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: entry: The IP address range that is allowed to access the instance.
            /// </remarks>
            [JsiiProperty(name: "entry", typeJson: "{\"primitive\":\"string\"}")]
            public string Entry
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of the instance.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string InstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: comment: The description of the entry.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "comment", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Comment
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: endpointType: The type of the endpoint.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endpointType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? EndpointType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: moduleName: The name of the module in the instance for which a whitelist is configured. Valid
            /// values: Registry and Chart.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "moduleName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ModuleName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: regionId: Region ID of instance. Default is current region.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "regionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? RegionId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}

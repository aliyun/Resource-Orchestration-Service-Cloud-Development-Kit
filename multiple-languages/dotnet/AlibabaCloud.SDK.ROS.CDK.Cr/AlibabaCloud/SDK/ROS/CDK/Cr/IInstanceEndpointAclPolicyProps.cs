using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cr
{
    /// <summary>Properties for defining a `ALIYUN::CR::InstanceEndpointAclPolicy`.</summary>
    [JsiiInterface(nativeType: typeof(IInstanceEndpointAclPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.InstanceEndpointAclPolicyProps")]
    public interface IInstanceEndpointAclPolicyProps
    {
        /// <summary>Property entry: The IP address range that is allowed to access the instance.</summary>
        [JsiiProperty(name: "entry", typeJson: "{\"primitive\":\"string\"}")]
        string Entry
        {
            get;
        }

        /// <summary>Property instanceId: The ID of the instance.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
        string InstanceId
        {
            get;
        }

        /// <summary>Property comment: The description of the entry.</summary>
        [JsiiProperty(name: "comment", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Comment
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property endpointType: The type of the endpoint.</summary>
        [JsiiProperty(name: "endpointType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? EndpointType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property moduleName: The name of the module in the instance for which a whitelist is configured.</summary>
        /// <remarks>
        /// Valid
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

        /// <summary>Property regionId: Region ID of instance.</summary>
        /// <remarks>
        /// Default is current region.
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
        [JsiiTypeProxy(nativeType: typeof(IInstanceEndpointAclPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.InstanceEndpointAclPolicyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cr.IInstanceEndpointAclPolicyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property entry: The IP address range that is allowed to access the instance.</summary>
            [JsiiProperty(name: "entry", typeJson: "{\"primitive\":\"string\"}")]
            public string Entry
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property instanceId: The ID of the instance.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string InstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property comment: The description of the entry.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "comment", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Comment
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property endpointType: The type of the endpoint.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "endpointType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? EndpointType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property moduleName: The name of the module in the instance for which a whitelist is configured.</summary>
            /// <remarks>
            /// Valid
            /// values: Registry and Chart.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "moduleName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ModuleName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property regionId: Region ID of instance.</summary>
            /// <remarks>
            /// Default is current region.
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

using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `Flowlog`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-flowlog
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IFlowlogProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.FlowlogProps")]
    public interface IFlowlogProps
    {
        /// <summary>Property cenId: The ID of the CEN instance.</summary>
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CenId
        {
            get;
        }

        /// <summary>Property description: The description of the flow log.</summary>
        /// <remarks>
        /// The description is optional. If you enter a description, it must be 1 to 256 characters in length, and cannot start with http:// or https://.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property flowLogName: The flow log name.</summary>
        /// <remarks>
        /// The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.
        /// </remarks>
        [JsiiProperty(name: "flowLogName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FlowLogName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property interval: The time window for collecting log data.</summary>
        /// <remarks>
        /// Unit: seconds. Valid values: 60 and 600. Default value: 600.
        /// </remarks>
        [JsiiProperty(name: "interval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Interval
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property logFormatString: The strings that define the fields in the flow log.</summary>
        /// <remarks>
        /// Format: ${Field 1}${Field 2}${Field 3}...{Field n}
        ///
        /// <list type="bullet">
        /// <description>If you do not configure this parameter, all fields are included in the flow log.</description>
        /// <description>If you configure this parameter, start the string with ${srcaddr}${dstaddr}${bytes} because ${srcaddr}${dstaddr}${bytes} are required variables.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "logFormatString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LogFormatString
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property logStoreName: The Logstore that stores the captured traffic data.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>If a Logstore is already created in the selected region, enter the name of the Logstore.</description>
        /// <description>If no Logstores are created in the selected region, enter a name and the system automatically creates a Logstore. The name of the Logstore. The name must meet the following requirements:
        /// ** The name must be unique in a project.
        /// ** The name can contain only lowercase letters, digits, hyphens (-), and underscores (_).
        /// ** The name must start and end with a lowercase letter or a digit.
        /// ** The name must be 3 to 63 characters in length.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "logStoreName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LogStoreName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property projectName: The project that stores the captured traffic data.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>If a project is already created in the selected region, enter the name of the project.</description>
        /// <description>If no projects are created in the selected region, enter a name and the system automatically creates a project.
        /// The project name must be unique in a region. You cannot change the name after the project is created. The name must meet the following requirements:
        /// ** The name must be globally unique.
        /// ** The name can contain only lowercase letters, digits, and hyphens (-).
        /// ** The name must start and end with a lowercase letter or a digit.
        /// ** The name must be 3 to 63 characters in length.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProjectName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags of flow log.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-cen.RosFlowlog.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Cen.RosFlowlog.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property transitRouterAttachmentId: The ID of the VPC connection, VPN connection, VBR connection, ECR connection, or inter-region connection.</summary>
        /// <remarks>
        /// If you create the flow log for a transfer router, skip this parameter.
        /// </remarks>
        [JsiiProperty(name: "transitRouterAttachmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TransitRouterAttachmentId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property transitRouterId: The ID of the transit router.</summary>
        [JsiiProperty(name: "transitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TransitRouterId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Flowlog`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-flowlog
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IFlowlogProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.FlowlogProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.IFlowlogProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property cenId: The ID of the CEN instance.</summary>
            [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CenId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the flow log.</summary>
            /// <remarks>
            /// The description is optional. If you enter a description, it must be 1 to 256 characters in length, and cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property flowLogName: The flow log name.</summary>
            /// <remarks>
            /// The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "flowLogName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FlowLogName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property interval: The time window for collecting log data.</summary>
            /// <remarks>
            /// Unit: seconds. Valid values: 60 and 600. Default value: 600.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "interval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Interval
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property logFormatString: The strings that define the fields in the flow log.</summary>
            /// <remarks>
            /// Format: ${Field 1}${Field 2}${Field 3}...{Field n}
            ///
            /// <list type="bullet">
            /// <description>If you do not configure this parameter, all fields are included in the flow log.</description>
            /// <description>If you configure this parameter, start the string with ${srcaddr}${dstaddr}${bytes} because ${srcaddr}${dstaddr}${bytes} are required variables.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "logFormatString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LogFormatString
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property logStoreName: The Logstore that stores the captured traffic data.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>If a Logstore is already created in the selected region, enter the name of the Logstore.</description>
            /// <description>If no Logstores are created in the selected region, enter a name and the system automatically creates a Logstore. The name of the Logstore. The name must meet the following requirements:
            /// ** The name must be unique in a project.
            /// ** The name can contain only lowercase letters, digits, hyphens (-), and underscores (_).
            /// ** The name must start and end with a lowercase letter or a digit.
            /// ** The name must be 3 to 63 characters in length.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "logStoreName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LogStoreName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property projectName: The project that stores the captured traffic data.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>If a project is already created in the selected region, enter the name of the project.</description>
            /// <description>If no projects are created in the selected region, enter a name and the system automatically creates a project.
            /// The project name must be unique in a region. You cannot change the name after the project is created. The name must meet the following requirements:
            /// ** The name must be globally unique.
            /// ** The name can contain only lowercase letters, digits, and hyphens (-).
            /// ** The name must start and end with a lowercase letter or a digit.
            /// ** The name must be 3 to 63 characters in length.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProjectName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags of flow log.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-cen.RosFlowlog.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Cen.RosFlowlog.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cen.RosFlowlog.ITagsProperty[]?>();
            }

            /// <summary>Property transitRouterAttachmentId: The ID of the VPC connection, VPN connection, VBR connection, ECR connection, or inter-region connection.</summary>
            /// <remarks>
            /// If you create the flow log for a transfer router, skip this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "transitRouterAttachmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TransitRouterAttachmentId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property transitRouterId: The ID of the transit router.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "transitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TransitRouterId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

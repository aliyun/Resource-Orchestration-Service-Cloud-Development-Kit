using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen.Datasource
{
    /// <summary>Properties for defining a `TransitRouterAttachments`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-transitrouterattachments
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ITransitRouterAttachmentsProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.datasource.TransitRouterAttachmentsProps")]
    public interface ITransitRouterAttachmentsProps
    {
        /// <summary>Property cenId: The ID of the CEN instance.</summary>
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CenId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Never: Never refresh the datasource resource when the stack is updated.</description>
        /// <description>Always: Always refresh the datasource resource when the stack is updated.
        /// Default is Never.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "refreshOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RefreshOptions
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property regionId: The ID of the region where the transit router is deployed.</summary>
        [JsiiProperty(name: "regionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RegionId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceTypes: Specify the type of the network instance associated with the connection to be queried.</summary>
        /// <remarks>
        /// Valid values:
        /// ** VPC: Virtual Private Cloud instance.
        /// ** CCN: Cloud Connect Network instance.
        /// ** VBR: Virtual Border Router instance.
        /// ** TR: Transit Router instance, indicating that cross-region connection information will be queried.
        /// </remarks>
        [JsiiProperty(name: "resourceTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceTypes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property transitRouterAttachmentId: The ID of the peer connection.</summary>
        [JsiiProperty(name: "transitRouterAttachmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TransitRouterAttachmentId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property transitRouterId: The ID of the enterprise edition transit router.</summary>
        [JsiiProperty(name: "transitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TransitRouterId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `TransitRouterAttachments`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-transitrouterattachments
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ITransitRouterAttachmentsProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.datasource.TransitRouterAttachmentsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.Datasource.ITransitRouterAttachmentsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property cenId: The ID of the CEN instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CenId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>Never: Never refresh the datasource resource when the stack is updated.</description>
            /// <description>Always: Always refresh the datasource resource when the stack is updated.
            /// Default is Never.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "refreshOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RefreshOptions
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property regionId: The ID of the region where the transit router is deployed.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "regionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RegionId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceTypes: Specify the type of the network instance associated with the connection to be queried.</summary>
            /// <remarks>
            /// Valid values:
            /// ** VPC: Virtual Private Cloud instance.
            /// ** CCN: Cloud Connect Network instance.
            /// ** VBR: Virtual Border Router instance.
            /// ** TR: Transit Router instance, indicating that cross-region connection information will be queried.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ResourceTypes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property transitRouterAttachmentId: The ID of the peer connection.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "transitRouterAttachmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TransitRouterAttachmentId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property transitRouterId: The ID of the enterprise edition transit router.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "transitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TransitRouterId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

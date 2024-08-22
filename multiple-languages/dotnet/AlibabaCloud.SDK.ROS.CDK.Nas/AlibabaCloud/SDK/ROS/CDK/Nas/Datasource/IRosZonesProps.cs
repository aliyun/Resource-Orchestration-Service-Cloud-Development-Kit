using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas.Datasource
{
    /// <summary>Properties for defining a `RosZones`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-zones
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosZonesProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.datasource.RosZonesProps")]
    public interface IRosZonesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: fileSystemType: The type of the file system. Default value: all. Valid values:
        /// standard: General-purpose NAS file system
        /// extreme: Extreme NAS file system
        /// cpfs: CPFS file system
        /// </remarks>
        [JsiiProperty(name: "fileSystemType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FileSystemType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
        /// - Never: Never refresh the datasource resource when the stack is updated.
        /// - Always: Always refresh the datasource resource when the stack is updated.
        /// Default is Never.
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

        /// <summary>Properties for defining a `RosZones`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-zones
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosZonesProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.datasource.RosZonesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nas.Datasource.IRosZonesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: fileSystemType: The type of the file system. Default value: all. Valid values:
            /// standard: General-purpose NAS file system
            /// extreme: Extreme NAS file system
            /// cpfs: CPFS file system
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fileSystemType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FileSystemType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
            /// - Never: Never refresh the datasource resource when the stack is updated.
            /// - Always: Always refresh the datasource resource when the stack is updated.
            /// Default is Never.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "refreshOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RefreshOptions
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

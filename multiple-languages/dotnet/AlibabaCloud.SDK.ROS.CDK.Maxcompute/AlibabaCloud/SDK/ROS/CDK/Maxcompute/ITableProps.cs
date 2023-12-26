using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Maxcompute
{
    /// <summary>Properties for defining a `Table`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-table
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ITableProps), fullyQualifiedName: "@alicloud/ros-cdk-maxcompute.TableProps")]
    public interface ITableProps
    {
        /// <summary>Property name: Table name.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Property project: Project name, if not provided, will be the default project.</summary>
        [JsiiProperty(name: "project", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Project
        {
            get;
        }

        /// <summary>Property comment: Table comment.</summary>
        [JsiiProperty(name: "comment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Comment
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ifNotExists: If you create a table by using the name of an existing table and  the parameter set to false, an error is returned.</summary>
        /// <remarks>
        /// If you specify the if not exists parameter, a success message
        /// is returned when you create a table by using the name of an
        /// existing table. The success message is returned even if the
        /// schema of the existing table is different from that of the table you want to create.
        /// If you create a table by using the name of an existing table,
        /// the table is not created and the metadata of the existing table is not changed.
        /// </remarks>
        [JsiiProperty(name: "ifNotExists", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IfNotExists
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property lifecycle: Table's lifecycle.</summary>
        [JsiiProperty(name: "lifecycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Lifecycle
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property schema: Table schema.</summary>
        [JsiiProperty(name: "schema", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-maxcompute.RosTable.SchemaProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Schema
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property stringSchema: Create a table with field names and field type strings.</summary>
        /// <remarks>
        /// Example: 'num bigint, num2 double', 'pt string'
        /// </remarks>
        [JsiiProperty(name: "stringSchema", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StringSchema
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Table`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-table
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ITableProps), fullyQualifiedName: "@alicloud/ros-cdk-maxcompute.TableProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Maxcompute.ITableProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property name: Table name.</summary>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property project: Project name, if not provided, will be the default project.</summary>
            [JsiiProperty(name: "project", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Project
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property comment: Table comment.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "comment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Comment
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ifNotExists: If you create a table by using the name of an existing table and  the parameter set to false, an error is returned.</summary>
            /// <remarks>
            /// If you specify the if not exists parameter, a success message
            /// is returned when you create a table by using the name of an
            /// existing table. The success message is returned even if the
            /// schema of the existing table is different from that of the table you want to create.
            /// If you create a table by using the name of an existing table,
            /// the table is not created and the metadata of the existing table is not changed.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ifNotExists", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IfNotExists
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property lifecycle: Table's lifecycle.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "lifecycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Lifecycle
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property schema: Table schema.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "schema", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-maxcompute.RosTable.SchemaProperty\"}]}}", isOptional: true)]
            public object? Schema
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property stringSchema: Create a table with field names and field type strings.</summary>
            /// <remarks>
            /// Example: 'num bigint, num2 double', 'pt string'
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "stringSchema", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StringSchema
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

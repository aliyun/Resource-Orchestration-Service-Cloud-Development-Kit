using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Maxcompute
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::MaxCompute::Table`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-maxcompute.TableProps")]
    public class TableProps : AlibabaCloud.SDK.ROS.CDK.Maxcompute.ITableProps
    {
        /// <summary>Property name: Table name.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Name
        {
            get;
            set;
        }

        /// <summary>Property project: Project name, if not provided, will be the default project.</summary>
        [JsiiProperty(name: "project", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Project
        {
            get;
            set;
        }

        /// <summary>Property comment: Table comment.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "comment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Comment
        {
            get;
            set;
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
        [JsiiProperty(name: "ifNotExists", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? IfNotExists
        {
            get;
            set;
        }

        /// <summary>Property lifecycle: Table's lifecycle.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "lifecycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Lifecycle
        {
            get;
            set;
        }

        /// <summary>Property schema: Table schema.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "schema", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-maxcompute.RosTable.SchemaProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? Schema
        {
            get;
            set;
        }

        /// <summary>Property stringSchema: Create a table with field names and field type strings.</summary>
        /// <remarks>
        /// Example: 'num bigint, num2 double', 'pt string'
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "stringSchema", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? StringSchema
        {
            get;
            set;
        }
    }
}

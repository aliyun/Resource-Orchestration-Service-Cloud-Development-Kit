using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Maxcompute
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::MaxCompute::Table`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-maxcompute.RosTableProps")]
    public class RosTableProps : AlibabaCloud.SDK.ROS.CDK.Maxcompute.IRosTableProps
    {
        /// <remarks>
        /// <strong>Property</strong>: name: Table name
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Name
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: project: Project name, if not provided, will be the default project
        /// </remarks>
        [JsiiProperty(name: "project", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Project
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: comment: Table comment
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "comment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Comment
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ifNotExists: If you create a table by using the name of an existing table and
        /// the parameter set to false, an error is returned.
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
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: lifecycle: Table's lifecycle.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "lifecycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Lifecycle
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: schema: Table schema
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "schema", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-maxcompute.RosTable.SchemaProperty\"}]}}", isOptional: true)]
        public object? Schema
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: stringSchema: Create a table with field names and field type strings.
        /// Example: 'num bigint, num2 double', 'pt string'
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "stringSchema", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? StringSchema
        {
            get;
            set;
        }
    }
}

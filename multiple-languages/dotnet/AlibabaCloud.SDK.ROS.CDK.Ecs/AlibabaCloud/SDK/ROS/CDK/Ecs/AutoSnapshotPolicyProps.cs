using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::AutoSnapshotPolicy`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.AutoSnapshotPolicyProps")]
    public class AutoSnapshotPolicyProps : AlibabaCloud.SDK.ROS.CDK.Ecs.IAutoSnapshotPolicyProps
    {
        /// <summary>Property repeatWeekdays: The automatic snapshot repetition dates.</summary>
        /// <remarks>
        /// The unit of measurement is day and the repeating cycle is a week. Value range: [1, 7], which represents days starting from Monday to Sunday, for example 1 indicates Monday. When you want to schedule multiple automatic snapshot tasks for a disk in a week, you can set the RepeatWeekdays to an array.
        /// A maximum of seven time points can be selected.
        /// The format is a list of [1, 2, ..., 7] and the time points are separated by commas (,).
        /// </remarks>
        [JsiiProperty(name: "repeatWeekdays", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        public object RepeatWeekdays
        {
            get;
            set;
        }

        /// <summary>Property retentionDays: The snapshot retention time, and the unit of measurement is day.</summary>
        /// <remarks>
        /// Optional values:
        /// -1: The automatic snapshots are retained permanently.
        /// [1, 65536]: The number of days retained.
        /// Default value: -1.
        /// </remarks>
        [JsiiProperty(name: "retentionDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object RetentionDays
        {
            get;
            set;
        }

        /// <summary>Property timePoints: The automatic snapshot creation schedule, and the unit of measurement is hour.</summary>
        /// <remarks>
        /// Value range: [0, 23], which represents from 00:00 to 24:00, for example 1 indicates 01:00. When you want to schedule multiple automatic snapshot tasks for a disk in a day, you can set the TimePoints to an array.
        /// A maximum of 24 time points can be selected.
        /// The format is a list of [0, 1, ..., 23] and the time points are separated by commas (,).
        /// </remarks>
        [JsiiProperty(name: "timePoints", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object TimePoints
        {
            get;
            set;
        }

        /// <summary>Property autoSnapshotPolicyName: The name of the automatic snapshot policy.</summary>
        /// <remarks>
        /// It can consist of [2, 128] English or Chinese characters.
        /// Must begin with an uppercase or lowercase letter or a Chinese character. Can contain numbers, periods (.), colons (:), underscores (_), and hyphens (-).
        /// Cannot start with http:// or https://.
        /// Default value: null.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoSnapshotPolicyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AutoSnapshotPolicyName
        {
            get;
            set;
        }

        /// <summary>Property diskIds: The disk ID.</summary>
        /// <remarks>
        /// When you want to apply the automatic snapshot policy to multiple disks, you can set the DiskIds to an array. The format is list of ["d-xxxxxxxxx", "d-yyyyyyyyy", ..., "d-zzzzzzzzz"] and the IDs are separated by commas (,).
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "diskIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? DiskIds
        {
            get;
            set;
        }

        /// <summary>Property resourceGroupId: Resource group id.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ResourceGroupId
        {
            get;
            set;
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosAutoSnapshotPolicy.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Ecs.RosAutoSnapshotPolicy.ITagsProperty[]? Tags
        {
            get;
            set;
        }
    }
}

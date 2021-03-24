using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pvtz
{
    /// <summary>A ROS resource type:  `ALIYUN::PVTZ::ZoneRecord`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Pvtz.ZoneRecord), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.ZoneRecord", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-pvtz.ZoneRecordProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class ZoneRecord : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::PVTZ::ZoneRecord`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public ZoneRecord(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Pvtz.IZoneRecordProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected ZoneRecord(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected ZoneRecord(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute Record: Record data.</summary>
        [JsiiProperty(name: "attrRecord", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrRecord
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RecordId: Parsing record Id.</summary>
        [JsiiProperty(name: "attrRecordId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrRecordId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ZoneId: Zone ID.</summary>
        [JsiiProperty(name: "attrZoneId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrZoneId
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}

package com.aliyun.ros.cdk.config;

/**
 * A ROS resource type:  `ALIYUN::Config::DeliveryChannel`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-30T05:21:18.450Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.config.$Module.class, fqn = "@alicloud/ros-cdk-config.DeliveryChannel")
public class DeliveryChannel extends com.aliyun.ros.cdk.core.Resource {

    protected DeliveryChannel(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DeliveryChannel(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::Config::DeliveryChannel`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public DeliveryChannel(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.config.DeliveryChannelProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::Config::DeliveryChannel`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public DeliveryChannel(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.config.DeliveryChannelProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DeliveryChannelId: The ID of the delivery method.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDeliveryChannelId() {
        return software.amazon.jsii.Kernel.get(this, "attrDeliveryChannelId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.config.DeliveryChannel}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.config.DeliveryChannel> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.config.DeliveryChannelProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.config.DeliveryChannelProps.Builder();
        }

        /**
         * Property deliveryChannelAssumeRoleArn: The Alibaba Cloud Resource Name (ARN) of the role to be assumed by the delivery method.
         * <p>
         * This parameter is required when you create a delivery method.
         * Note If the delivery method assumes the service linked role for Cloud Config, you can specify
         * the ARN in the format of the provided example and replace the account ID with the
         * ID of your Alibaba Cloud account.
         * <p>
         * @return {@code this}
         * @param deliveryChannelAssumeRoleArn Property deliveryChannelAssumeRoleArn: The Alibaba Cloud Resource Name (ARN) of the role to be assumed by the delivery method. This parameter is required.
         */
        public Builder deliveryChannelAssumeRoleArn(final java.lang.String deliveryChannelAssumeRoleArn) {
            this.props.deliveryChannelAssumeRoleArn(deliveryChannelAssumeRoleArn);
            return this;
        }
        /**
         * Property deliveryChannelAssumeRoleArn: The Alibaba Cloud Resource Name (ARN) of the role to be assumed by the delivery method.
         * <p>
         * This parameter is required when you create a delivery method.
         * Note If the delivery method assumes the service linked role for Cloud Config, you can specify
         * the ARN in the format of the provided example and replace the account ID with the
         * ID of your Alibaba Cloud account.
         * <p>
         * @return {@code this}
         * @param deliveryChannelAssumeRoleArn Property deliveryChannelAssumeRoleArn: The Alibaba Cloud Resource Name (ARN) of the role to be assumed by the delivery method. This parameter is required.
         */
        public Builder deliveryChannelAssumeRoleArn(final com.aliyun.ros.cdk.core.IResolvable deliveryChannelAssumeRoleArn) {
            this.props.deliveryChannelAssumeRoleArn(deliveryChannelAssumeRoleArn);
            return this;
        }

        /**
         * Property deliveryChannelTargetArn: The ARN of the delivery destination.
         * <p>
         * This parameter is required when you create a
         * delivery method. The value must be in one of the following formats:
         * acs:oss:{RegionId}:{Aliuid}:{bucketName} if your delivery destination is an Object Storage Service (OSS) bucket.
         * acs:mns:{RegionId}:{Aliuid}:/topics/{topicName} if your delivery destination is a Message Service (MNS) topic.
         * acs:log:{RegionId}:{Aliuid}:project/{projectName}/logstore/{logstoreName} if your delivery destination is a Log Service Logstore.
         * <p>
         * @return {@code this}
         * @param deliveryChannelTargetArn Property deliveryChannelTargetArn: The ARN of the delivery destination. This parameter is required.
         */
        public Builder deliveryChannelTargetArn(final java.lang.String deliveryChannelTargetArn) {
            this.props.deliveryChannelTargetArn(deliveryChannelTargetArn);
            return this;
        }
        /**
         * Property deliveryChannelTargetArn: The ARN of the delivery destination.
         * <p>
         * This parameter is required when you create a
         * delivery method. The value must be in one of the following formats:
         * acs:oss:{RegionId}:{Aliuid}:{bucketName} if your delivery destination is an Object Storage Service (OSS) bucket.
         * acs:mns:{RegionId}:{Aliuid}:/topics/{topicName} if your delivery destination is a Message Service (MNS) topic.
         * acs:log:{RegionId}:{Aliuid}:project/{projectName}/logstore/{logstoreName} if your delivery destination is a Log Service Logstore.
         * <p>
         * @return {@code this}
         * @param deliveryChannelTargetArn Property deliveryChannelTargetArn: The ARN of the delivery destination. This parameter is required.
         */
        public Builder deliveryChannelTargetArn(final com.aliyun.ros.cdk.core.IResolvable deliveryChannelTargetArn) {
            this.props.deliveryChannelTargetArn(deliveryChannelTargetArn);
            return this;
        }

        /**
         * Property deliveryChannelType: The type of the delivery method.
         * <p>
         * This parameter is required when you create a delivery
         * method. Valid values:
         * OSS
         * MNS
         * SLS
         * <p>
         * @return {@code this}
         * @param deliveryChannelType Property deliveryChannelType: The type of the delivery method. This parameter is required.
         */
        public Builder deliveryChannelType(final java.lang.String deliveryChannelType) {
            this.props.deliveryChannelType(deliveryChannelType);
            return this;
        }
        /**
         * Property deliveryChannelType: The type of the delivery method.
         * <p>
         * This parameter is required when you create a delivery
         * method. Valid values:
         * OSS
         * MNS
         * SLS
         * <p>
         * @return {@code this}
         * @param deliveryChannelType Property deliveryChannelType: The type of the delivery method. This parameter is required.
         */
        public Builder deliveryChannelType(final com.aliyun.ros.cdk.core.IResolvable deliveryChannelType) {
            this.props.deliveryChannelType(deliveryChannelType);
            return this;
        }

        /**
         * Property deliveryChannelCondition: The rule attached to the delivery method.
         * <p>
         * This parameter is applicable only to delivery
         * methods of the MNS type.
         * This parameter allows you to specify the lowest risk level for the events to subscribe
         * to and the resource types for which you want to subscribe to events.
         * To specify the lowest risk level for the events to subscribe to, use the following
         * format:{"filterType":"RuleRiskLevel","value":"1","multiple":false}.
         * The value field indicates the lowest risk level and can be set to 1, 2, or 3, which
         * indicates the high risk level, the medium risk level, and the low risk level, respectively.
         * To specify the resource types for which you want to subscribe to events, use the following
         * format:{"filterType":"ResourceType","values":["ACS::ACK::Cluster","ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage"],"multiple":true}.
         * The values field indicates the resource types. Its value is a JSON array.
         * Example: [{"filterType":"ResourceType","values":["ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage","ACS::CDN::Domain","ACS::CEN::CenBandwidthPackage","ACS::CEN::CenInstance","ACS::CEN::Flowlog","ACS::DdosCoo::Instance"],"multiple":true}]
         * <p>
         * @return {@code this}
         * @param deliveryChannelCondition Property deliveryChannelCondition: The rule attached to the delivery method. This parameter is required.
         */
        public Builder deliveryChannelCondition(final java.lang.String deliveryChannelCondition) {
            this.props.deliveryChannelCondition(deliveryChannelCondition);
            return this;
        }
        /**
         * Property deliveryChannelCondition: The rule attached to the delivery method.
         * <p>
         * This parameter is applicable only to delivery
         * methods of the MNS type.
         * This parameter allows you to specify the lowest risk level for the events to subscribe
         * to and the resource types for which you want to subscribe to events.
         * To specify the lowest risk level for the events to subscribe to, use the following
         * format:{"filterType":"RuleRiskLevel","value":"1","multiple":false}.
         * The value field indicates the lowest risk level and can be set to 1, 2, or 3, which
         * indicates the high risk level, the medium risk level, and the low risk level, respectively.
         * To specify the resource types for which you want to subscribe to events, use the following
         * format:{"filterType":"ResourceType","values":["ACS::ACK::Cluster","ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage"],"multiple":true}.
         * The values field indicates the resource types. Its value is a JSON array.
         * Example: [{"filterType":"ResourceType","values":["ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage","ACS::CDN::Domain","ACS::CEN::CenBandwidthPackage","ACS::CEN::CenInstance","ACS::CEN::Flowlog","ACS::DdosCoo::Instance"],"multiple":true}]
         * <p>
         * @return {@code this}
         * @param deliveryChannelCondition Property deliveryChannelCondition: The rule attached to the delivery method. This parameter is required.
         */
        public Builder deliveryChannelCondition(final com.aliyun.ros.cdk.core.IResolvable deliveryChannelCondition) {
            this.props.deliveryChannelCondition(deliveryChannelCondition);
            return this;
        }

        /**
         * Property deliveryChannelName: The name of the delivery method.
         * <p>
         * @return {@code this}
         * @param deliveryChannelName Property deliveryChannelName: The name of the delivery method. This parameter is required.
         */
        public Builder deliveryChannelName(final java.lang.String deliveryChannelName) {
            this.props.deliveryChannelName(deliveryChannelName);
            return this;
        }
        /**
         * Property deliveryChannelName: The name of the delivery method.
         * <p>
         * @return {@code this}
         * @param deliveryChannelName Property deliveryChannelName: The name of the delivery method. This parameter is required.
         */
        public Builder deliveryChannelName(final com.aliyun.ros.cdk.core.IResolvable deliveryChannelName) {
            this.props.deliveryChannelName(deliveryChannelName);
            return this;
        }

        /**
         * Property description: The description of the delivery method.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the delivery method. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the delivery method.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the delivery method. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.config.DeliveryChannel}.
         */
        @Override
        public com.aliyun.ros.cdk.config.DeliveryChannel build() {
            return new com.aliyun.ros.cdk.config.DeliveryChannel(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

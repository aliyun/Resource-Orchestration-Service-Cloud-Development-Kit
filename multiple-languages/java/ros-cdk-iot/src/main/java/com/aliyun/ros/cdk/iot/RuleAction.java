package com.aliyun.ros.cdk.iot;

/**
 * A ROS resource type:  `ALIYUN::IOT::RuleAction`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-22T06:16:29.544Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.iot.$Module.class, fqn = "@alicloud/ros-cdk-iot.RuleAction")
public class RuleAction extends com.aliyun.ros.cdk.core.Resource {

    protected RuleAction(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RuleAction(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::IOT::RuleAction`.
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
    public RuleAction(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.iot.RuleActionProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::IOT::RuleAction`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public RuleAction(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.iot.RuleActionProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ActionId: The ID of the rule action.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrActionId() {
        return software.amazon.jsii.Kernel.get(this, "attrActionId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.iot.RuleAction}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.iot.RuleAction> {
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
        private final com.aliyun.ros.cdk.iot.RuleActionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.iot.RuleActionProps.Builder();
        }

        /**
         * Property configuration: The configurations of the rule action.
         * <p>
         * You must specify a JSON string. The configurations
         * for different types of rule actions are different. For more information about required
         * syntax and examples, see the following tables.
         * <p>
         * @return {@code this}
         * @param configuration Property configuration: The configurations of the rule action. This parameter is required.
         */
        public Builder configuration(final java.lang.String configuration) {
            this.props.configuration(configuration);
            return this;
        }
        /**
         * Property configuration: The configurations of the rule action.
         * <p>
         * You must specify a JSON string. The configurations
         * for different types of rule actions are different. For more information about required
         * syntax and examples, see the following tables.
         * <p>
         * @return {@code this}
         * @param configuration Property configuration: The configurations of the rule action. This parameter is required.
         */
        public Builder configuration(final com.aliyun.ros.cdk.core.IResolvable configuration) {
            this.props.configuration(configuration);
            return this;
        }

        /**
         * Property ruleId: The ID of the rule for which you want to create an action.
         * <p>
         * You can use either of the
         * following methods to view the rule ID: 1. Log on to the IoT Platform console and choose Rules&gt;Data Forwarding. 2. Call the ListRule operation.
         * <p>
         * @return {@code this}
         * @param ruleId Property ruleId: The ID of the rule for which you want to create an action. This parameter is required.
         */
        public Builder ruleId(final java.lang.Number ruleId) {
            this.props.ruleId(ruleId);
            return this;
        }
        /**
         * Property ruleId: The ID of the rule for which you want to create an action.
         * <p>
         * You can use either of the
         * following methods to view the rule ID: 1. Log on to the IoT Platform console and choose Rules&gt;Data Forwarding. 2. Call the ListRule operation.
         * <p>
         * @return {@code this}
         * @param ruleId Property ruleId: The ID of the rule for which you want to create an action. This parameter is required.
         */
        public Builder ruleId(final com.aliyun.ros.cdk.core.IResolvable ruleId) {
            this.props.ruleId(ruleId);
            return this;
        }

        /**
         * Property type: The type of the rule action.
         * <p>
         * Valid values:
         * MNS: forwards data in the topics that have been processed by the rule engine to Message
         * Service (MNS) for message transmission.
         * FC: forwards data in the topics that have been processed by the rule engine to Function
         * Compute for event computing.
         * REPUBLISH: forwards data in the topics that have been processed by the rule engine to another
         * IoT Platform topic.
         * AMQP: forwards data to AMQP consumer groups.
         * OTS: forwards data in the topics that have been processed by the rule engine to Table
         * Store for NoSQL data storage.
         * Note
         * Rules of the binary data format (the DataType parameter is set toBINARY) do not support forwarding data to Table Store.
         * Destination Alibaba Cloud services that are supported by the rule engine vary based
         * on regions. For more information about the regions and destination cloud services
         * that are supported by the rule engine, see Regions and zones.
         * <p>
         * @return {@code this}
         * @param type Property type: The type of the rule action. This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * Property type: The type of the rule action.
         * <p>
         * Valid values:
         * MNS: forwards data in the topics that have been processed by the rule engine to Message
         * Service (MNS) for message transmission.
         * FC: forwards data in the topics that have been processed by the rule engine to Function
         * Compute for event computing.
         * REPUBLISH: forwards data in the topics that have been processed by the rule engine to another
         * IoT Platform topic.
         * AMQP: forwards data to AMQP consumer groups.
         * OTS: forwards data in the topics that have been processed by the rule engine to Table
         * Store for NoSQL data storage.
         * Note
         * Rules of the binary data format (the DataType parameter is set toBINARY) do not support forwarding data to Table Store.
         * Destination Alibaba Cloud services that are supported by the rule engine vary based
         * on regions. For more information about the regions and destination cloud services
         * that are supported by the rule engine, see Regions and zones.
         * <p>
         * @return {@code this}
         * @param type Property type: The type of the rule action. This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * Property errorActionFlag: Indicates whether the rule action forwarded error operation data.
         * <p>
         * Error operation
         * data indicates that the rule engine failed to forward data from the IoT Platform topic
         * to the destination cloud service. A data forwarding failure indicates that forwarding
         * retries also failed. Valid values:
         * true: forwards error operation data.
         * false: forwards normal data instead of error operation data.
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param errorActionFlag Property errorActionFlag: Indicates whether the rule action forwarded error operation data. This parameter is required.
         */
        public Builder errorActionFlag(final java.lang.Boolean errorActionFlag) {
            this.props.errorActionFlag(errorActionFlag);
            return this;
        }
        /**
         * Property errorActionFlag: Indicates whether the rule action forwarded error operation data.
         * <p>
         * Error operation
         * data indicates that the rule engine failed to forward data from the IoT Platform topic
         * to the destination cloud service. A data forwarding failure indicates that forwarding
         * retries also failed. Valid values:
         * true: forwards error operation data.
         * false: forwards normal data instead of error operation data.
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param errorActionFlag Property errorActionFlag: Indicates whether the rule action forwarded error operation data. This parameter is required.
         */
        public Builder errorActionFlag(final com.aliyun.ros.cdk.core.IResolvable errorActionFlag) {
            this.props.errorActionFlag(errorActionFlag);
            return this;
        }

        /**
         * Property iotInstanceId: The ID of the instance.
         * <p>
         * This parameter is not required for public instances. However,
         * the parameter is required for the instances that you have purchased.
         * <p>
         * @return {@code this}
         * @param iotInstanceId Property iotInstanceId: The ID of the instance. This parameter is required.
         */
        public Builder iotInstanceId(final java.lang.String iotInstanceId) {
            this.props.iotInstanceId(iotInstanceId);
            return this;
        }
        /**
         * Property iotInstanceId: The ID of the instance.
         * <p>
         * This parameter is not required for public instances. However,
         * the parameter is required for the instances that you have purchased.
         * <p>
         * @return {@code this}
         * @param iotInstanceId Property iotInstanceId: The ID of the instance. This parameter is required.
         */
        public Builder iotInstanceId(final com.aliyun.ros.cdk.core.IResolvable iotInstanceId) {
            this.props.iotInstanceId(iotInstanceId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.iot.RuleAction}.
         */
        @Override
        public com.aliyun.ros.cdk.iot.RuleAction build() {
            return new com.aliyun.ros.cdk.iot.RuleAction(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

package com.aliyun.ros.cdk.iot;

/**
 * A ROS resource type:  `ALIYUN::IOT::Rule`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.59.0 (build eb02c92)", date = "2022-05-20T02:42:02.719Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.iot.$Module.class, fqn = "@alicloud/ros-cdk-iot.Rule")
public class Rule extends com.aliyun.ros.cdk.core.Resource {

    protected Rule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Rule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::IOT::Rule`.
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
    public Rule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.iot.RuleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::IOT::Rule`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Rule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.iot.RuleProps props) {
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
     * Attribute RuleId: The ID of the rule.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.iot.Rule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.iot.Rule> {
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
        private final com.aliyun.ros.cdk.iot.RuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.iot.RuleProps.Builder();
        }

        /**
         * Property name: The name of the rule.
         * <p>
         * The name must be 1 to 30 characters in length and can contain
         * English letters, digits, underscores (_), and hyphens (-). Chinese language is also
         * supported. Each Chinese symbol occupies 2 characters.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the rule. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the rule.
         * <p>
         * The name must be 1 to 30 characters in length and can contain
         * English letters, digits, underscores (_), and hyphens (-). Chinese language is also
         * supported. Each Chinese symbol occupies 2 characters.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the rule. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property dataType: The format of the data to be processed by the rule.
         * <p>
         * You must specify the format of
         * device data to be processed for this parameter. Valid values:
         * JSON: JSON data
         * BINARY: binary data
         * Note If you specifyBINARY, you cannot set the TopicType parameter to 0 and forward data to Table Store, Time Series Database (TSDB), or ApsaradDB
         * for RDS.
         * Default value: JSON.
         * <p>
         * @return {@code this}
         * @param dataType Property dataType: The format of the data to be processed by the rule. This parameter is required.
         */
        public Builder dataType(final java.lang.String dataType) {
            this.props.dataType(dataType);
            return this;
        }
        /**
         * Property dataType: The format of the data to be processed by the rule.
         * <p>
         * You must specify the format of
         * device data to be processed for this parameter. Valid values:
         * JSON: JSON data
         * BINARY: binary data
         * Note If you specifyBINARY, you cannot set the TopicType parameter to 0 and forward data to Table Store, Time Series Database (TSDB), or ApsaradDB
         * for RDS.
         * Default value: JSON.
         * <p>
         * @return {@code this}
         * @param dataType Property dataType: The format of the data to be processed by the rule. This parameter is required.
         */
        public Builder dataType(final com.aliyun.ros.cdk.core.IResolvable dataType) {
            this.props.dataType(dataType);
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
         * Property productKey: The ProductKey of the product to which the rule applies.
         * <p>
         * @return {@code this}
         * @param productKey Property productKey: The ProductKey of the product to which the rule applies. This parameter is required.
         */
        public Builder productKey(final java.lang.String productKey) {
            this.props.productKey(productKey);
            return this;
        }
        /**
         * Property productKey: The ProductKey of the product to which the rule applies.
         * <p>
         * @return {@code this}
         * @param productKey Property productKey: The ProductKey of the product to which the rule applies. This parameter is required.
         */
        public Builder productKey(final com.aliyun.ros.cdk.core.IResolvable productKey) {
            this.props.productKey(productKey);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group to which the rule is assigned.
         * <p>
         * You can view the resource
         * group information in the Resource Management console.
         * If you do not specify this parameter, the rule is assigned to the default resource
         * group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the rule is assigned. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group to which the rule is assigned.
         * <p>
         * You can view the resource
         * group information in the Resource Management console.
         * If you do not specify this parameter, the rule is assigned to the default resource
         * group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the rule is assigned. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property ruleAction:.
         * <p>
         * @return {@code this}
         * @param ruleAction Property ruleAction:. This parameter is required.
         */
        public Builder ruleAction(final com.aliyun.ros.cdk.core.IResolvable ruleAction) {
            this.props.ruleAction(ruleAction);
            return this;
        }
        /**
         * Property ruleAction:.
         * <p>
         * @return {@code this}
         * @param ruleAction Property ruleAction:. This parameter is required.
         */
        public Builder ruleAction(final java.util.List<? extends java.lang.Object> ruleAction) {
            this.props.ruleAction(ruleAction);
            return this;
        }

        /**
         * Property ruleDesc: The description of the rule.
         * <p>
         * The description can be up to 100 characters in length.
         * Each Chinese symbol occupies 1 characters.
         * <p>
         * @return {@code this}
         * @param ruleDesc Property ruleDesc: The description of the rule. This parameter is required.
         */
        public Builder ruleDesc(final java.lang.String ruleDesc) {
            this.props.ruleDesc(ruleDesc);
            return this;
        }
        /**
         * Property ruleDesc: The description of the rule.
         * <p>
         * The description can be up to 100 characters in length.
         * Each Chinese symbol occupies 1 characters.
         * <p>
         * @return {@code this}
         * @param ruleDesc Property ruleDesc: The description of the rule. This parameter is required.
         */
        public Builder ruleDesc(final com.aliyun.ros.cdk.core.IResolvable ruleDesc) {
            this.props.ruleDesc(ruleDesc);
            return this;
        }

        /**
         * Property select: The SQL SELECT statement that you want to execute.
         * <p>
         * For more information, seeSQL expressions.
         * Note Specify the fields that follow the Select keyword for this parameter. For example, if the Select statement is Select a,b,c, specify a,b,c for this parameter.
         * <p>
         * @return {@code this}
         * @param select Property select: The SQL SELECT statement that you want to execute. This parameter is required.
         */
        public Builder select(final java.lang.String select) {
            this.props.select(select);
            return this;
        }
        /**
         * Property select: The SQL SELECT statement that you want to execute.
         * <p>
         * For more information, seeSQL expressions.
         * Note Specify the fields that follow the Select keyword for this parameter. For example, if the Select statement is Select a,b,c, specify a,b,c for this parameter.
         * <p>
         * @return {@code this}
         * @param select Property select: The SQL SELECT statement that you want to execute. This parameter is required.
         */
        public Builder select(final com.aliyun.ros.cdk.core.IResolvable select) {
            this.props.select(select);
            return this;
        }

        /**
         * Property shortTopic: The topic to which this rule is applied.
         * <p>
         * Syntax: ${deviceName}/topicShortName. ${deviceName}specifies the name of the device, and topicShortNamespecifies the custom name of the topic.
         * Basic communication topics or Thing Specification Language (TSL)-based communication
         * topics. Syntax: ${deviceName}/topicShortName. You can replace ${deviceName} with the + wildcard. The wildcard indicates that the topic applies to all devices under the
         * product. Valid values of topicShortName:
         * /thing/event/property/post: submits the property data of a device.
         * /thing/event/${tsl.event.identifier}/post: submits the event data of a device.${tsl.event.identifier} specifies the identifier of an event in the TSL.
         * /thing/lifecycle: submits device lifecycle changes.
         * /thing/downlink/reply/message: sends a response to a request from IoT Platform.
         * /thing/list/found: submits the data when a gateway detects a new sub-device.
         * /thing/topo/lifecycle: submits device topology changes.
         * /thing/event/property/history/post: submits historical property data of a device.
         * /thing/event/${tsl.event.identifier}/post: submits the historical event data of a device.${tsl.event.identifier}specifies the identifier of an event in the TSL.
         * /ota/upgrade: submits OTA update status.
         * /ota/version/post: submits OTA module versions.
         * /thing/deviceinfo/update: submits device tag changes.
         * /edge/driver/${driver_id}/point_post: submits pass-through data from Link IoT Edge.${driver_id} specifies the ID of the driver that a device uses to access Link IoT Edge.
         * ${packageId}/${jobId}/ota/job/status: submits the status of OTA update batches. This topic is a basic communication topic.
         * ${packageId}specifies the ID of the firmware. ${jobId}specifies the ID of the update batch.
         * Custom topics. Example:${deviceName}/user/get.
         * You can call theQueryProductTopicoperation to view all custom topics of the product.
         * When you specify a custom topic, you can use the + and # wildcards.
         * You can replace ${deviceName} with the+ wildcard. The wildcard indicates that the topic applies to all devices under the
         * product.
         * You can replace the fields that follow ${deviceName} with /user/#. The # wildcard indicates that the topic applies whatever values are specified for the fields that
         * follow/user.
         * For more information about how to use wildcards, see Wildcards in topics.
         * Topic that is used to submit device status changes: ${deviceName}.
         * You can use the+wildcard. In this case, the status changes of all devices under the product are submitted.
         * <p>
         * @return {@code this}
         * @param shortTopic Property shortTopic: The topic to which this rule is applied. This parameter is required.
         */
        public Builder shortTopic(final java.lang.String shortTopic) {
            this.props.shortTopic(shortTopic);
            return this;
        }
        /**
         * Property shortTopic: The topic to which this rule is applied.
         * <p>
         * Syntax: ${deviceName}/topicShortName. ${deviceName}specifies the name of the device, and topicShortNamespecifies the custom name of the topic.
         * Basic communication topics or Thing Specification Language (TSL)-based communication
         * topics. Syntax: ${deviceName}/topicShortName. You can replace ${deviceName} with the + wildcard. The wildcard indicates that the topic applies to all devices under the
         * product. Valid values of topicShortName:
         * /thing/event/property/post: submits the property data of a device.
         * /thing/event/${tsl.event.identifier}/post: submits the event data of a device.${tsl.event.identifier} specifies the identifier of an event in the TSL.
         * /thing/lifecycle: submits device lifecycle changes.
         * /thing/downlink/reply/message: sends a response to a request from IoT Platform.
         * /thing/list/found: submits the data when a gateway detects a new sub-device.
         * /thing/topo/lifecycle: submits device topology changes.
         * /thing/event/property/history/post: submits historical property data of a device.
         * /thing/event/${tsl.event.identifier}/post: submits the historical event data of a device.${tsl.event.identifier}specifies the identifier of an event in the TSL.
         * /ota/upgrade: submits OTA update status.
         * /ota/version/post: submits OTA module versions.
         * /thing/deviceinfo/update: submits device tag changes.
         * /edge/driver/${driver_id}/point_post: submits pass-through data from Link IoT Edge.${driver_id} specifies the ID of the driver that a device uses to access Link IoT Edge.
         * ${packageId}/${jobId}/ota/job/status: submits the status of OTA update batches. This topic is a basic communication topic.
         * ${packageId}specifies the ID of the firmware. ${jobId}specifies the ID of the update batch.
         * Custom topics. Example:${deviceName}/user/get.
         * You can call theQueryProductTopicoperation to view all custom topics of the product.
         * When you specify a custom topic, you can use the + and # wildcards.
         * You can replace ${deviceName} with the+ wildcard. The wildcard indicates that the topic applies to all devices under the
         * product.
         * You can replace the fields that follow ${deviceName} with /user/#. The # wildcard indicates that the topic applies whatever values are specified for the fields that
         * follow/user.
         * For more information about how to use wildcards, see Wildcards in topics.
         * Topic that is used to submit device status changes: ${deviceName}.
         * You can use the+wildcard. In this case, the status changes of all devices under the product are submitted.
         * <p>
         * @return {@code this}
         * @param shortTopic Property shortTopic: The topic to which this rule is applied. This parameter is required.
         */
        public Builder shortTopic(final com.aliyun.ros.cdk.core.IResolvable shortTopic) {
            this.props.shortTopic(shortTopic);
            return this;
        }

        /**
         * Property startRule: Start the rule.
         * <p>
         * The rule at least contains one rule action with normal data forward.
         * <p>
         * @return {@code this}
         * @param startRule Property startRule: Start the rule. This parameter is required.
         */
        public Builder startRule(final java.lang.Boolean startRule) {
            this.props.startRule(startRule);
            return this;
        }
        /**
         * Property startRule: Start the rule.
         * <p>
         * The rule at least contains one rule action with normal data forward.
         * <p>
         * @return {@code this}
         * @param startRule Property startRule: Start the rule. This parameter is required.
         */
        public Builder startRule(final com.aliyun.ros.cdk.core.IResolvable startRule) {
            this.props.startRule(startRule);
            return this;
        }

        /**
         * Property topicType: 0: The topic is a basic communication topic or TSL-based communication topic.
         * <p>
         * 1: The topic is a custom topic.
         * 2: The topic is used to submit device status changes. Syntax: /as/mqtt/status/${productKey}/${deviceName}.
         * <p>
         * @return {@code this}
         * @param topicType Property topicType: 0: The topic is a basic communication topic or TSL-based communication topic. This parameter is required.
         */
        public Builder topicType(final java.lang.Number topicType) {
            this.props.topicType(topicType);
            return this;
        }
        /**
         * Property topicType: 0: The topic is a basic communication topic or TSL-based communication topic.
         * <p>
         * 1: The topic is a custom topic.
         * 2: The topic is used to submit device status changes. Syntax: /as/mqtt/status/${productKey}/${deviceName}.
         * <p>
         * @return {@code this}
         * @param topicType Property topicType: 0: The topic is a basic communication topic or TSL-based communication topic. This parameter is required.
         */
        public Builder topicType(final com.aliyun.ros.cdk.core.IResolvable topicType) {
            this.props.topicType(topicType);
            return this;
        }

        /**
         * Property where: The condition that is used to trigger the rule.
         * <p>
         * For more information, seeSQL expressions.
         * Note Specify the fields that follow theWherekeyword for this parameter. For example, if the Where statement is Where a&gt;10, specify a&gt;10 for this parameter.
         * <p>
         * @return {@code this}
         * @param where Property where: The condition that is used to trigger the rule. This parameter is required.
         */
        public Builder where(final java.lang.String where) {
            this.props.where(where);
            return this;
        }
        /**
         * Property where: The condition that is used to trigger the rule.
         * <p>
         * For more information, seeSQL expressions.
         * Note Specify the fields that follow theWherekeyword for this parameter. For example, if the Where statement is Where a&gt;10, specify a&gt;10 for this parameter.
         * <p>
         * @return {@code this}
         * @param where Property where: The condition that is used to trigger the rule. This parameter is required.
         */
        public Builder where(final com.aliyun.ros.cdk.core.IResolvable where) {
            this.props.where(where);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.iot.Rule}.
         */
        @Override
        public com.aliyun.ros.cdk.iot.Rule build() {
            return new com.aliyun.ros.cdk.iot.Rule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

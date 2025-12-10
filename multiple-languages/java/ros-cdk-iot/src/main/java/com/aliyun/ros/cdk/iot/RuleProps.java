package com.aliyun.ros.cdk.iot;

/**
 * Properties for defining a <code>Rule</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-rule
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:57.782Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.iot.$Module.class, fqn = "@alicloud/ros-cdk-iot.RuleProps")
@software.amazon.jsii.Jsii.Proxy(RuleProps.Jsii$Proxy.class)
public interface RuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property name: The name of the rule.
     * <p>
     * The name must be 1 to 30 characters in length and can contain
     * English letters, digits, underscores (_), and hyphens (-). Chinese language is also
     * supported. Each Chinese symbol occupies 2 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDataType() {
        return null;
    }

    /**
     * Property iotInstanceId: The ID of the instance.
     * <p>
     * This parameter is not required for public instances. However,
     * the parameter is required for the instances that you have purchased.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIotInstanceId() {
        return null;
    }

    /**
     * Property productKey: The ProductKey of the product to which the rule applies.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProductKey() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group to which the rule is assigned.
     * <p>
     * You can view the resource
     * group information in the Resource Management console.
     * If you do not specify this parameter, the rule is assigned to the default resource
     * group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property ruleAction:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRuleAction() {
        return null;
    }

    /**
     * Property ruleDesc: The description of the rule.
     * <p>
     * The description can be up to 100 characters in length.
     * Each Chinese symbol occupies 1 characters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRuleDesc() {
        return null;
    }

    /**
     * Property select: The SQL SELECT statement that you want to execute.
     * <p>
     * For more information, seeSQL expressions.
     * Note Specify the fields that follow the Select keyword for this parameter. For example, if the Select statement is Select a,b,c, specify a,b,c for this parameter.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSelect() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getShortTopic() {
        return null;
    }

    /**
     * Property startRule: Start the rule.
     * <p>
     * The rule at least contains one rule action with normal data forward.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStartRule() {
        return null;
    }

    /**
     * Property topicType: 0: The topic is a basic communication topic or TSL-based communication topic.
     * <p>
     * 1: The topic is a custom topic.
     * 2: The topic is used to submit device status changes. Syntax: /as/mqtt/status/${productKey}/${deviceName}.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTopicType() {
        return null;
    }

    /**
     * Property where: The condition that is used to trigger the rule.
     * <p>
     * For more information, seeSQL expressions.
     * Note Specify the fields that follow theWherekeyword for this parameter. For example, if the Where statement is Where a&gt;10, specify a&gt;10 for this parameter.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWhere() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RuleProps> {
        java.lang.Object name;
        java.lang.Object dataType;
        java.lang.Object iotInstanceId;
        java.lang.Object productKey;
        java.lang.Object resourceGroupId;
        java.lang.Object ruleAction;
        java.lang.Object ruleDesc;
        java.lang.Object select;
        java.lang.Object shortTopic;
        java.lang.Object startRule;
        java.lang.Object topicType;
        java.lang.Object where;

        /**
         * Sets the value of {@link RuleProps#getName}
         * @param name Property name: The name of the rule. This parameter is required.
         *             The name must be 1 to 30 characters in length and can contain
         *             English letters, digits, underscores (_), and hyphens (-). Chinese language is also
         *             supported. Each Chinese symbol occupies 2 characters.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getName}
         * @param name Property name: The name of the rule. This parameter is required.
         *             The name must be 1 to 30 characters in length and can contain
         *             English letters, digits, underscores (_), and hyphens (-). Chinese language is also
         *             supported. Each Chinese symbol occupies 2 characters.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getDataType}
         * @param dataType Property dataType: The format of the data to be processed by the rule.
         *                 You must specify the format of
         *                 device data to be processed for this parameter. Valid values:
         *                 JSON: JSON data
         *                 BINARY: binary data
         *                 Note If you specifyBINARY, you cannot set the TopicType parameter to 0 and forward data to Table Store, Time Series Database (TSDB), or ApsaradDB
         *                 for RDS.
         *                 Default value: JSON.
         * @return {@code this}
         */
        public Builder dataType(java.lang.String dataType) {
            this.dataType = dataType;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getDataType}
         * @param dataType Property dataType: The format of the data to be processed by the rule.
         *                 You must specify the format of
         *                 device data to be processed for this parameter. Valid values:
         *                 JSON: JSON data
         *                 BINARY: binary data
         *                 Note If you specifyBINARY, you cannot set the TopicType parameter to 0 and forward data to Table Store, Time Series Database (TSDB), or ApsaradDB
         *                 for RDS.
         *                 Default value: JSON.
         * @return {@code this}
         */
        public Builder dataType(com.aliyun.ros.cdk.core.IResolvable dataType) {
            this.dataType = dataType;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getIotInstanceId}
         * @param iotInstanceId Property iotInstanceId: The ID of the instance.
         *                      This parameter is not required for public instances. However,
         *                      the parameter is required for the instances that you have purchased.
         * @return {@code this}
         */
        public Builder iotInstanceId(java.lang.String iotInstanceId) {
            this.iotInstanceId = iotInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getIotInstanceId}
         * @param iotInstanceId Property iotInstanceId: The ID of the instance.
         *                      This parameter is not required for public instances. However,
         *                      the parameter is required for the instances that you have purchased.
         * @return {@code this}
         */
        public Builder iotInstanceId(com.aliyun.ros.cdk.core.IResolvable iotInstanceId) {
            this.iotInstanceId = iotInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getProductKey}
         * @param productKey Property productKey: The ProductKey of the product to which the rule applies.
         * @return {@code this}
         */
        public Builder productKey(java.lang.String productKey) {
            this.productKey = productKey;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getProductKey}
         * @param productKey Property productKey: The ProductKey of the product to which the rule applies.
         * @return {@code this}
         */
        public Builder productKey(com.aliyun.ros.cdk.core.IResolvable productKey) {
            this.productKey = productKey;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the rule is assigned.
         *                        You can view the resource
         *                        group information in the Resource Management console.
         *                        If you do not specify this parameter, the rule is assigned to the default resource
         *                        group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the rule is assigned.
         *                        You can view the resource
         *                        group information in the Resource Management console.
         *                        If you do not specify this parameter, the rule is assigned to the default resource
         *                        group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getRuleAction}
         * @param ruleAction Property ruleAction:.
         * @return {@code this}
         */
        public Builder ruleAction(com.aliyun.ros.cdk.core.IResolvable ruleAction) {
            this.ruleAction = ruleAction;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getRuleAction}
         * @param ruleAction Property ruleAction:.
         * @return {@code this}
         */
        public Builder ruleAction(java.util.List<? extends java.lang.Object> ruleAction) {
            this.ruleAction = ruleAction;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getRuleDesc}
         * @param ruleDesc Property ruleDesc: The description of the rule.
         *                 The description can be up to 100 characters in length.
         *                 Each Chinese symbol occupies 1 characters.
         * @return {@code this}
         */
        public Builder ruleDesc(java.lang.String ruleDesc) {
            this.ruleDesc = ruleDesc;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getRuleDesc}
         * @param ruleDesc Property ruleDesc: The description of the rule.
         *                 The description can be up to 100 characters in length.
         *                 Each Chinese symbol occupies 1 characters.
         * @return {@code this}
         */
        public Builder ruleDesc(com.aliyun.ros.cdk.core.IResolvable ruleDesc) {
            this.ruleDesc = ruleDesc;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getSelect}
         * @param select Property select: The SQL SELECT statement that you want to execute.
         *               For more information, seeSQL expressions.
         *               Note Specify the fields that follow the Select keyword for this parameter. For example, if the Select statement is Select a,b,c, specify a,b,c for this parameter.
         * @return {@code this}
         */
        public Builder select(java.lang.String select) {
            this.select = select;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getSelect}
         * @param select Property select: The SQL SELECT statement that you want to execute.
         *               For more information, seeSQL expressions.
         *               Note Specify the fields that follow the Select keyword for this parameter. For example, if the Select statement is Select a,b,c, specify a,b,c for this parameter.
         * @return {@code this}
         */
        public Builder select(com.aliyun.ros.cdk.core.IResolvable select) {
            this.select = select;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getShortTopic}
         * @param shortTopic Property shortTopic: The topic to which this rule is applied.
         *                   Syntax: ${deviceName}/topicShortName. ${deviceName}specifies the name of the device, and topicShortNamespecifies the custom name of the topic.
         *                   Basic communication topics or Thing Specification Language (TSL)-based communication
         *                   topics. Syntax: ${deviceName}/topicShortName. You can replace ${deviceName} with the + wildcard. The wildcard indicates that the topic applies to all devices under the
         *                   product. Valid values of topicShortName:
         *                   /thing/event/property/post: submits the property data of a device.
         *                   /thing/event/${tsl.event.identifier}/post: submits the event data of a device.${tsl.event.identifier} specifies the identifier of an event in the TSL.
         *                   /thing/lifecycle: submits device lifecycle changes.
         *                   /thing/downlink/reply/message: sends a response to a request from IoT Platform.
         *                   /thing/list/found: submits the data when a gateway detects a new sub-device.
         *                   /thing/topo/lifecycle: submits device topology changes.
         *                   /thing/event/property/history/post: submits historical property data of a device.
         *                   /thing/event/${tsl.event.identifier}/post: submits the historical event data of a device.${tsl.event.identifier}specifies the identifier of an event in the TSL.
         *                   /ota/upgrade: submits OTA update status.
         *                   /ota/version/post: submits OTA module versions.
         *                   /thing/deviceinfo/update: submits device tag changes.
         *                   /edge/driver/${driver_id}/point_post: submits pass-through data from Link IoT Edge.${driver_id} specifies the ID of the driver that a device uses to access Link IoT Edge.
         *                   ${packageId}/${jobId}/ota/job/status: submits the status of OTA update batches. This topic is a basic communication topic.
         *                   ${packageId}specifies the ID of the firmware. ${jobId}specifies the ID of the update batch.
         *                   Custom topics. Example:${deviceName}/user/get.
         *                   You can call theQueryProductTopicoperation to view all custom topics of the product.
         *                   When you specify a custom topic, you can use the + and # wildcards.
         *                   You can replace ${deviceName} with the+ wildcard. The wildcard indicates that the topic applies to all devices under the
         *                   product.
         *                   You can replace the fields that follow ${deviceName} with /user/#. The # wildcard indicates that the topic applies whatever values are specified for the fields that
         *                   follow/user.
         *                   For more information about how to use wildcards, see Wildcards in topics.
         *                   Topic that is used to submit device status changes: ${deviceName}.
         *                   You can use the+wildcard. In this case, the status changes of all devices under the product are submitted.
         * @return {@code this}
         */
        public Builder shortTopic(java.lang.String shortTopic) {
            this.shortTopic = shortTopic;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getShortTopic}
         * @param shortTopic Property shortTopic: The topic to which this rule is applied.
         *                   Syntax: ${deviceName}/topicShortName. ${deviceName}specifies the name of the device, and topicShortNamespecifies the custom name of the topic.
         *                   Basic communication topics or Thing Specification Language (TSL)-based communication
         *                   topics. Syntax: ${deviceName}/topicShortName. You can replace ${deviceName} with the + wildcard. The wildcard indicates that the topic applies to all devices under the
         *                   product. Valid values of topicShortName:
         *                   /thing/event/property/post: submits the property data of a device.
         *                   /thing/event/${tsl.event.identifier}/post: submits the event data of a device.${tsl.event.identifier} specifies the identifier of an event in the TSL.
         *                   /thing/lifecycle: submits device lifecycle changes.
         *                   /thing/downlink/reply/message: sends a response to a request from IoT Platform.
         *                   /thing/list/found: submits the data when a gateway detects a new sub-device.
         *                   /thing/topo/lifecycle: submits device topology changes.
         *                   /thing/event/property/history/post: submits historical property data of a device.
         *                   /thing/event/${tsl.event.identifier}/post: submits the historical event data of a device.${tsl.event.identifier}specifies the identifier of an event in the TSL.
         *                   /ota/upgrade: submits OTA update status.
         *                   /ota/version/post: submits OTA module versions.
         *                   /thing/deviceinfo/update: submits device tag changes.
         *                   /edge/driver/${driver_id}/point_post: submits pass-through data from Link IoT Edge.${driver_id} specifies the ID of the driver that a device uses to access Link IoT Edge.
         *                   ${packageId}/${jobId}/ota/job/status: submits the status of OTA update batches. This topic is a basic communication topic.
         *                   ${packageId}specifies the ID of the firmware. ${jobId}specifies the ID of the update batch.
         *                   Custom topics. Example:${deviceName}/user/get.
         *                   You can call theQueryProductTopicoperation to view all custom topics of the product.
         *                   When you specify a custom topic, you can use the + and # wildcards.
         *                   You can replace ${deviceName} with the+ wildcard. The wildcard indicates that the topic applies to all devices under the
         *                   product.
         *                   You can replace the fields that follow ${deviceName} with /user/#. The # wildcard indicates that the topic applies whatever values are specified for the fields that
         *                   follow/user.
         *                   For more information about how to use wildcards, see Wildcards in topics.
         *                   Topic that is used to submit device status changes: ${deviceName}.
         *                   You can use the+wildcard. In this case, the status changes of all devices under the product are submitted.
         * @return {@code this}
         */
        public Builder shortTopic(com.aliyun.ros.cdk.core.IResolvable shortTopic) {
            this.shortTopic = shortTopic;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getStartRule}
         * @param startRule Property startRule: Start the rule.
         *                  The rule at least contains one rule action with normal data forward.
         * @return {@code this}
         */
        public Builder startRule(java.lang.Boolean startRule) {
            this.startRule = startRule;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getStartRule}
         * @param startRule Property startRule: Start the rule.
         *                  The rule at least contains one rule action with normal data forward.
         * @return {@code this}
         */
        public Builder startRule(com.aliyun.ros.cdk.core.IResolvable startRule) {
            this.startRule = startRule;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getTopicType}
         * @param topicType Property topicType: 0: The topic is a basic communication topic or TSL-based communication topic.
         *                  1: The topic is a custom topic.
         *                  2: The topic is used to submit device status changes. Syntax: /as/mqtt/status/${productKey}/${deviceName}.
         * @return {@code this}
         */
        public Builder topicType(java.lang.Number topicType) {
            this.topicType = topicType;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getTopicType}
         * @param topicType Property topicType: 0: The topic is a basic communication topic or TSL-based communication topic.
         *                  1: The topic is a custom topic.
         *                  2: The topic is used to submit device status changes. Syntax: /as/mqtt/status/${productKey}/${deviceName}.
         * @return {@code this}
         */
        public Builder topicType(com.aliyun.ros.cdk.core.IResolvable topicType) {
            this.topicType = topicType;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getWhere}
         * @param where Property where: The condition that is used to trigger the rule.
         *              For more information, seeSQL expressions.
         *              Note Specify the fields that follow theWherekeyword for this parameter. For example, if the Where statement is Where a&gt;10, specify a&gt;10 for this parameter.
         * @return {@code this}
         */
        public Builder where(java.lang.String where) {
            this.where = where;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getWhere}
         * @param where Property where: The condition that is used to trigger the rule.
         *              For more information, seeSQL expressions.
         *              Note Specify the fields that follow theWherekeyword for this parameter. For example, if the Where statement is Where a&gt;10, specify a&gt;10 for this parameter.
         * @return {@code this}
         */
        public Builder where(com.aliyun.ros.cdk.core.IResolvable where) {
            this.where = where;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RuleProps {
        private final java.lang.Object name;
        private final java.lang.Object dataType;
        private final java.lang.Object iotInstanceId;
        private final java.lang.Object productKey;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object ruleAction;
        private final java.lang.Object ruleDesc;
        private final java.lang.Object select;
        private final java.lang.Object shortTopic;
        private final java.lang.Object startRule;
        private final java.lang.Object topicType;
        private final java.lang.Object where;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dataType = software.amazon.jsii.Kernel.get(this, "dataType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.iotInstanceId = software.amazon.jsii.Kernel.get(this, "iotInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.productKey = software.amazon.jsii.Kernel.get(this, "productKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleAction = software.amazon.jsii.Kernel.get(this, "ruleAction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleDesc = software.amazon.jsii.Kernel.get(this, "ruleDesc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.select = software.amazon.jsii.Kernel.get(this, "select", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.shortTopic = software.amazon.jsii.Kernel.get(this, "shortTopic", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.startRule = software.amazon.jsii.Kernel.get(this, "startRule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.topicType = software.amazon.jsii.Kernel.get(this, "topicType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.where = software.amazon.jsii.Kernel.get(this, "where", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.dataType = builder.dataType;
            this.iotInstanceId = builder.iotInstanceId;
            this.productKey = builder.productKey;
            this.resourceGroupId = builder.resourceGroupId;
            this.ruleAction = builder.ruleAction;
            this.ruleDesc = builder.ruleDesc;
            this.select = builder.select;
            this.shortTopic = builder.shortTopic;
            this.startRule = builder.startRule;
            this.topicType = builder.topicType;
            this.where = builder.where;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getDataType() {
            return this.dataType;
        }

        @Override
        public final java.lang.Object getIotInstanceId() {
            return this.iotInstanceId;
        }

        @Override
        public final java.lang.Object getProductKey() {
            return this.productKey;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getRuleAction() {
            return this.ruleAction;
        }

        @Override
        public final java.lang.Object getRuleDesc() {
            return this.ruleDesc;
        }

        @Override
        public final java.lang.Object getSelect() {
            return this.select;
        }

        @Override
        public final java.lang.Object getShortTopic() {
            return this.shortTopic;
        }

        @Override
        public final java.lang.Object getStartRule() {
            return this.startRule;
        }

        @Override
        public final java.lang.Object getTopicType() {
            return this.topicType;
        }

        @Override
        public final java.lang.Object getWhere() {
            return this.where;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("name", om.valueToTree(this.getName()));
            if (this.getDataType() != null) {
                data.set("dataType", om.valueToTree(this.getDataType()));
            }
            if (this.getIotInstanceId() != null) {
                data.set("iotInstanceId", om.valueToTree(this.getIotInstanceId()));
            }
            if (this.getProductKey() != null) {
                data.set("productKey", om.valueToTree(this.getProductKey()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getRuleAction() != null) {
                data.set("ruleAction", om.valueToTree(this.getRuleAction()));
            }
            if (this.getRuleDesc() != null) {
                data.set("ruleDesc", om.valueToTree(this.getRuleDesc()));
            }
            if (this.getSelect() != null) {
                data.set("select", om.valueToTree(this.getSelect()));
            }
            if (this.getShortTopic() != null) {
                data.set("shortTopic", om.valueToTree(this.getShortTopic()));
            }
            if (this.getStartRule() != null) {
                data.set("startRule", om.valueToTree(this.getStartRule()));
            }
            if (this.getTopicType() != null) {
                data.set("topicType", om.valueToTree(this.getTopicType()));
            }
            if (this.getWhere() != null) {
                data.set("where", om.valueToTree(this.getWhere()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-iot.RuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RuleProps.Jsii$Proxy that = (RuleProps.Jsii$Proxy) o;

            if (!name.equals(that.name)) return false;
            if (this.dataType != null ? !this.dataType.equals(that.dataType) : that.dataType != null) return false;
            if (this.iotInstanceId != null ? !this.iotInstanceId.equals(that.iotInstanceId) : that.iotInstanceId != null) return false;
            if (this.productKey != null ? !this.productKey.equals(that.productKey) : that.productKey != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.ruleAction != null ? !this.ruleAction.equals(that.ruleAction) : that.ruleAction != null) return false;
            if (this.ruleDesc != null ? !this.ruleDesc.equals(that.ruleDesc) : that.ruleDesc != null) return false;
            if (this.select != null ? !this.select.equals(that.select) : that.select != null) return false;
            if (this.shortTopic != null ? !this.shortTopic.equals(that.shortTopic) : that.shortTopic != null) return false;
            if (this.startRule != null ? !this.startRule.equals(that.startRule) : that.startRule != null) return false;
            if (this.topicType != null ? !this.topicType.equals(that.topicType) : that.topicType != null) return false;
            return this.where != null ? this.where.equals(that.where) : that.where == null;
        }

        @Override
        public final int hashCode() {
            int result = this.name.hashCode();
            result = 31 * result + (this.dataType != null ? this.dataType.hashCode() : 0);
            result = 31 * result + (this.iotInstanceId != null ? this.iotInstanceId.hashCode() : 0);
            result = 31 * result + (this.productKey != null ? this.productKey.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.ruleAction != null ? this.ruleAction.hashCode() : 0);
            result = 31 * result + (this.ruleDesc != null ? this.ruleDesc.hashCode() : 0);
            result = 31 * result + (this.select != null ? this.select.hashCode() : 0);
            result = 31 * result + (this.shortTopic != null ? this.shortTopic.hashCode() : 0);
            result = 31 * result + (this.startRule != null ? this.startRule.hashCode() : 0);
            result = 31 * result + (this.topicType != null ? this.topicType.hashCode() : 0);
            result = 31 * result + (this.where != null ? this.where.hashCode() : 0);
            return result;
        }
    }
}

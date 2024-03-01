package com.aliyun.ros.cdk.iot;

/**
 * Properties for defining a <code>RosRule</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-rule
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-03-01T09:16:52.932Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.iot.$Module.class, fqn = "@alicloud/ros-cdk-iot.RosRuleProps")
@software.amazon.jsii.Jsii.Proxy(RosRuleProps.Jsii$Proxy.class)
public interface RosRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDataType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIotInstanceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProductKey() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRuleAction() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRuleDesc() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSelect() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getShortTopic() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStartRule() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTopicType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWhere() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosRuleProps> {
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
         * Sets the value of {@link RosRuleProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getDataType}
         * @param dataType the value to be set.
         * @return {@code this}
         */
        public Builder dataType(java.lang.String dataType) {
            this.dataType = dataType;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getDataType}
         * @param dataType the value to be set.
         * @return {@code this}
         */
        public Builder dataType(com.aliyun.ros.cdk.core.IResolvable dataType) {
            this.dataType = dataType;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getIotInstanceId}
         * @param iotInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder iotInstanceId(java.lang.String iotInstanceId) {
            this.iotInstanceId = iotInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getIotInstanceId}
         * @param iotInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder iotInstanceId(com.aliyun.ros.cdk.core.IResolvable iotInstanceId) {
            this.iotInstanceId = iotInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getProductKey}
         * @param productKey the value to be set.
         * @return {@code this}
         */
        public Builder productKey(java.lang.String productKey) {
            this.productKey = productKey;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getProductKey}
         * @param productKey the value to be set.
         * @return {@code this}
         */
        public Builder productKey(com.aliyun.ros.cdk.core.IResolvable productKey) {
            this.productKey = productKey;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getRuleAction}
         * @param ruleAction the value to be set.
         * @return {@code this}
         */
        public Builder ruleAction(com.aliyun.ros.cdk.core.IResolvable ruleAction) {
            this.ruleAction = ruleAction;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getRuleAction}
         * @param ruleAction the value to be set.
         * @return {@code this}
         */
        public Builder ruleAction(java.util.List<? extends java.lang.Object> ruleAction) {
            this.ruleAction = ruleAction;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getRuleDesc}
         * @param ruleDesc the value to be set.
         * @return {@code this}
         */
        public Builder ruleDesc(java.lang.String ruleDesc) {
            this.ruleDesc = ruleDesc;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getRuleDesc}
         * @param ruleDesc the value to be set.
         * @return {@code this}
         */
        public Builder ruleDesc(com.aliyun.ros.cdk.core.IResolvable ruleDesc) {
            this.ruleDesc = ruleDesc;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getSelect}
         * @param select the value to be set.
         * @return {@code this}
         */
        public Builder select(java.lang.String select) {
            this.select = select;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getSelect}
         * @param select the value to be set.
         * @return {@code this}
         */
        public Builder select(com.aliyun.ros.cdk.core.IResolvable select) {
            this.select = select;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getShortTopic}
         * @param shortTopic the value to be set.
         * @return {@code this}
         */
        public Builder shortTopic(java.lang.String shortTopic) {
            this.shortTopic = shortTopic;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getShortTopic}
         * @param shortTopic the value to be set.
         * @return {@code this}
         */
        public Builder shortTopic(com.aliyun.ros.cdk.core.IResolvable shortTopic) {
            this.shortTopic = shortTopic;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getStartRule}
         * @param startRule the value to be set.
         * @return {@code this}
         */
        public Builder startRule(java.lang.Boolean startRule) {
            this.startRule = startRule;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getStartRule}
         * @param startRule the value to be set.
         * @return {@code this}
         */
        public Builder startRule(com.aliyun.ros.cdk.core.IResolvable startRule) {
            this.startRule = startRule;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getTopicType}
         * @param topicType the value to be set.
         * @return {@code this}
         */
        public Builder topicType(java.lang.Number topicType) {
            this.topicType = topicType;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getTopicType}
         * @param topicType the value to be set.
         * @return {@code this}
         */
        public Builder topicType(com.aliyun.ros.cdk.core.IResolvable topicType) {
            this.topicType = topicType;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getWhere}
         * @param where the value to be set.
         * @return {@code this}
         */
        public Builder where(java.lang.String where) {
            this.where = where;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getWhere}
         * @param where the value to be set.
         * @return {@code this}
         */
        public Builder where(com.aliyun.ros.cdk.core.IResolvable where) {
            this.where = where;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosRuleProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-iot.RosRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosRuleProps.Jsii$Proxy that = (RosRuleProps.Jsii$Proxy) o;

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

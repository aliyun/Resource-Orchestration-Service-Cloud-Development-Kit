package com.aliyun.ros.cdk.iot;

/**
 * Properties for defining a `ALIYUN::IOT::Rule`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:36.042Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.iot.$Module.class, fqn = "@alicloud/ros-cdk-iot.RosRuleProps")
@software.amazon.jsii.Jsii.Proxy(RosRuleProps.Jsii$Proxy.class)
public interface RosRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDataType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getIotInstanceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getProductKey() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getRuleDesc() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSelect() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getShortTopic() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getTopicType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getWhere() {
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
        private java.lang.String name;
        private java.lang.String dataType;
        private java.lang.String iotInstanceId;
        private java.lang.String productKey;
        private java.lang.String resourceGroupId;
        private java.lang.String ruleDesc;
        private java.lang.String select;
        private java.lang.String shortTopic;
        private java.lang.Number topicType;
        private java.lang.String where;

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
         * Sets the value of {@link RosRuleProps#getDataType}
         * @param dataType the value to be set.
         * @return {@code this}
         */
        public Builder dataType(java.lang.String dataType) {
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
         * Sets the value of {@link RosRuleProps#getProductKey}
         * @param productKey the value to be set.
         * @return {@code this}
         */
        public Builder productKey(java.lang.String productKey) {
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
         * Sets the value of {@link RosRuleProps#getRuleDesc}
         * @param ruleDesc the value to be set.
         * @return {@code this}
         */
        public Builder ruleDesc(java.lang.String ruleDesc) {
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
         * Sets the value of {@link RosRuleProps#getShortTopic}
         * @param shortTopic the value to be set.
         * @return {@code this}
         */
        public Builder shortTopic(java.lang.String shortTopic) {
            this.shortTopic = shortTopic;
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
         * Sets the value of {@link RosRuleProps#getWhere}
         * @param where the value to be set.
         * @return {@code this}
         */
        public Builder where(java.lang.String where) {
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
            return new Jsii$Proxy(name, dataType, iotInstanceId, productKey, resourceGroupId, ruleDesc, select, shortTopic, topicType, where);
        }
    }

    /**
     * An implementation for {@link RosRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosRuleProps {
        private final java.lang.String name;
        private final java.lang.String dataType;
        private final java.lang.String iotInstanceId;
        private final java.lang.String productKey;
        private final java.lang.String resourceGroupId;
        private final java.lang.String ruleDesc;
        private final java.lang.String select;
        private final java.lang.String shortTopic;
        private final java.lang.Number topicType;
        private final java.lang.String where;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dataType = software.amazon.jsii.Kernel.get(this, "dataType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.iotInstanceId = software.amazon.jsii.Kernel.get(this, "iotInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.productKey = software.amazon.jsii.Kernel.get(this, "productKey", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.ruleDesc = software.amazon.jsii.Kernel.get(this, "ruleDesc", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.select = software.amazon.jsii.Kernel.get(this, "select", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.shortTopic = software.amazon.jsii.Kernel.get(this, "shortTopic", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.topicType = software.amazon.jsii.Kernel.get(this, "topicType", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.where = software.amazon.jsii.Kernel.get(this, "where", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String name, final java.lang.String dataType, final java.lang.String iotInstanceId, final java.lang.String productKey, final java.lang.String resourceGroupId, final java.lang.String ruleDesc, final java.lang.String select, final java.lang.String shortTopic, final java.lang.Number topicType, final java.lang.String where) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.name = java.util.Objects.requireNonNull(name, "name is required");
            this.dataType = dataType;
            this.iotInstanceId = iotInstanceId;
            this.productKey = productKey;
            this.resourceGroupId = resourceGroupId;
            this.ruleDesc = ruleDesc;
            this.select = select;
            this.shortTopic = shortTopic;
            this.topicType = topicType;
            this.where = where;
        }

        @Override
        public final java.lang.String getName() {
            return this.name;
        }

        @Override
        public final java.lang.String getDataType() {
            return this.dataType;
        }

        @Override
        public final java.lang.String getIotInstanceId() {
            return this.iotInstanceId;
        }

        @Override
        public final java.lang.String getProductKey() {
            return this.productKey;
        }

        @Override
        public final java.lang.String getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.String getRuleDesc() {
            return this.ruleDesc;
        }

        @Override
        public final java.lang.String getSelect() {
            return this.select;
        }

        @Override
        public final java.lang.String getShortTopic() {
            return this.shortTopic;
        }

        @Override
        public final java.lang.Number getTopicType() {
            return this.topicType;
        }

        @Override
        public final java.lang.String getWhere() {
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
            if (this.getRuleDesc() != null) {
                data.set("ruleDesc", om.valueToTree(this.getRuleDesc()));
            }
            if (this.getSelect() != null) {
                data.set("select", om.valueToTree(this.getSelect()));
            }
            if (this.getShortTopic() != null) {
                data.set("shortTopic", om.valueToTree(this.getShortTopic()));
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
            if (this.ruleDesc != null ? !this.ruleDesc.equals(that.ruleDesc) : that.ruleDesc != null) return false;
            if (this.select != null ? !this.select.equals(that.select) : that.select != null) return false;
            if (this.shortTopic != null ? !this.shortTopic.equals(that.shortTopic) : that.shortTopic != null) return false;
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
            result = 31 * result + (this.ruleDesc != null ? this.ruleDesc.hashCode() : 0);
            result = 31 * result + (this.select != null ? this.select.hashCode() : 0);
            result = 31 * result + (this.shortTopic != null ? this.shortTopic.hashCode() : 0);
            result = 31 * result + (this.topicType != null ? this.topicType.hashCode() : 0);
            result = 31 * result + (this.where != null ? this.where.hashCode() : 0);
            return result;
        }
    }
}

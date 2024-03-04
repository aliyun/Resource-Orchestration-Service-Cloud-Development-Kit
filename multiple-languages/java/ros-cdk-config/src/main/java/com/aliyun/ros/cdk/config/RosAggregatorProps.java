package com.aliyun.ros.cdk.config;

/**
 * Properties for defining a <code>RosAggregator</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-aggregator
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-03-01T09:16:50.841Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.config.$Module.class, fqn = "@alicloud/ros-cdk-config.RosAggregatorProps")
@software.amazon.jsii.Jsii.Proxy(RosAggregatorProps.Jsii$Proxy.class)
public interface RosAggregatorProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAggregatorName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDescription();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAggregatorAccounts() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAggregatorType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAggregatorProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAggregatorProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAggregatorProps> {
        java.lang.Object aggregatorName;
        java.lang.Object description;
        java.lang.Object aggregatorAccounts;
        java.lang.Object aggregatorType;

        /**
         * Sets the value of {@link RosAggregatorProps#getAggregatorName}
         * @param aggregatorName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder aggregatorName(java.lang.String aggregatorName) {
            this.aggregatorName = aggregatorName;
            return this;
        }

        /**
         * Sets the value of {@link RosAggregatorProps#getAggregatorName}
         * @param aggregatorName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder aggregatorName(com.aliyun.ros.cdk.core.IResolvable aggregatorName) {
            this.aggregatorName = aggregatorName;
            return this;
        }

        /**
         * Sets the value of {@link RosAggregatorProps#getDescription}
         * @param description the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosAggregatorProps#getDescription}
         * @param description the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosAggregatorProps#getAggregatorAccounts}
         * @param aggregatorAccounts the value to be set.
         * @return {@code this}
         */
        public Builder aggregatorAccounts(com.aliyun.ros.cdk.core.IResolvable aggregatorAccounts) {
            this.aggregatorAccounts = aggregatorAccounts;
            return this;
        }

        /**
         * Sets the value of {@link RosAggregatorProps#getAggregatorAccounts}
         * @param aggregatorAccounts the value to be set.
         * @return {@code this}
         */
        public Builder aggregatorAccounts(java.util.List<? extends java.lang.Object> aggregatorAccounts) {
            this.aggregatorAccounts = aggregatorAccounts;
            return this;
        }

        /**
         * Sets the value of {@link RosAggregatorProps#getAggregatorType}
         * @param aggregatorType the value to be set.
         * @return {@code this}
         */
        public Builder aggregatorType(java.lang.String aggregatorType) {
            this.aggregatorType = aggregatorType;
            return this;
        }

        /**
         * Sets the value of {@link RosAggregatorProps#getAggregatorType}
         * @param aggregatorType the value to be set.
         * @return {@code this}
         */
        public Builder aggregatorType(com.aliyun.ros.cdk.core.IResolvable aggregatorType) {
            this.aggregatorType = aggregatorType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAggregatorProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAggregatorProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAggregatorProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAggregatorProps {
        private final java.lang.Object aggregatorName;
        private final java.lang.Object description;
        private final java.lang.Object aggregatorAccounts;
        private final java.lang.Object aggregatorType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.aggregatorName = software.amazon.jsii.Kernel.get(this, "aggregatorName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.aggregatorAccounts = software.amazon.jsii.Kernel.get(this, "aggregatorAccounts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.aggregatorType = software.amazon.jsii.Kernel.get(this, "aggregatorType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.aggregatorName = java.util.Objects.requireNonNull(builder.aggregatorName, "aggregatorName is required");
            this.description = java.util.Objects.requireNonNull(builder.description, "description is required");
            this.aggregatorAccounts = builder.aggregatorAccounts;
            this.aggregatorType = builder.aggregatorType;
        }

        @Override
        public final java.lang.Object getAggregatorName() {
            return this.aggregatorName;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getAggregatorAccounts() {
            return this.aggregatorAccounts;
        }

        @Override
        public final java.lang.Object getAggregatorType() {
            return this.aggregatorType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("aggregatorName", om.valueToTree(this.getAggregatorName()));
            data.set("description", om.valueToTree(this.getDescription()));
            if (this.getAggregatorAccounts() != null) {
                data.set("aggregatorAccounts", om.valueToTree(this.getAggregatorAccounts()));
            }
            if (this.getAggregatorType() != null) {
                data.set("aggregatorType", om.valueToTree(this.getAggregatorType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-config.RosAggregatorProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAggregatorProps.Jsii$Proxy that = (RosAggregatorProps.Jsii$Proxy) o;

            if (!aggregatorName.equals(that.aggregatorName)) return false;
            if (!description.equals(that.description)) return false;
            if (this.aggregatorAccounts != null ? !this.aggregatorAccounts.equals(that.aggregatorAccounts) : that.aggregatorAccounts != null) return false;
            return this.aggregatorType != null ? this.aggregatorType.equals(that.aggregatorType) : that.aggregatorType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.aggregatorName.hashCode();
            result = 31 * result + (this.description.hashCode());
            result = 31 * result + (this.aggregatorAccounts != null ? this.aggregatorAccounts.hashCode() : 0);
            result = 31 * result + (this.aggregatorType != null ? this.aggregatorType.hashCode() : 0);
            return result;
        }
    }
}

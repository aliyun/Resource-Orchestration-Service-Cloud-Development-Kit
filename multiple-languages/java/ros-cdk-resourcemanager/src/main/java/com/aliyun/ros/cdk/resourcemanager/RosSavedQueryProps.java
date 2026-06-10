package com.aliyun.ros.cdk.resourcemanager;

/**
 * Properties for defining a <code>RosSavedQuery</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-savedquery
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:38:07.314Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.RosSavedQueryProps")
@software.amazon.jsii.Jsii.Proxy(RosSavedQueryProps.Jsii$Proxy.class)
public interface RosSavedQueryProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getExpression();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSavedQueryName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosSavedQueryProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSavedQueryProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSavedQueryProps> {
        java.lang.Object expression;
        java.lang.Object savedQueryName;
        java.lang.Object description;

        /**
         * Sets the value of {@link RosSavedQueryProps#getExpression}
         * @param expression the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder expression(java.lang.String expression) {
            this.expression = expression;
            return this;
        }

        /**
         * Sets the value of {@link RosSavedQueryProps#getExpression}
         * @param expression the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder expression(com.aliyun.ros.cdk.core.IResolvable expression) {
            this.expression = expression;
            return this;
        }

        /**
         * Sets the value of {@link RosSavedQueryProps#getSavedQueryName}
         * @param savedQueryName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder savedQueryName(java.lang.String savedQueryName) {
            this.savedQueryName = savedQueryName;
            return this;
        }

        /**
         * Sets the value of {@link RosSavedQueryProps#getSavedQueryName}
         * @param savedQueryName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder savedQueryName(com.aliyun.ros.cdk.core.IResolvable savedQueryName) {
            this.savedQueryName = savedQueryName;
            return this;
        }

        /**
         * Sets the value of {@link RosSavedQueryProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosSavedQueryProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSavedQueryProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSavedQueryProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosSavedQueryProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSavedQueryProps {
        private final java.lang.Object expression;
        private final java.lang.Object savedQueryName;
        private final java.lang.Object description;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.expression = software.amazon.jsii.Kernel.get(this, "expression", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.savedQueryName = software.amazon.jsii.Kernel.get(this, "savedQueryName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.expression = java.util.Objects.requireNonNull(builder.expression, "expression is required");
            this.savedQueryName = java.util.Objects.requireNonNull(builder.savedQueryName, "savedQueryName is required");
            this.description = builder.description;
        }

        @Override
        public final java.lang.Object getExpression() {
            return this.expression;
        }

        @Override
        public final java.lang.Object getSavedQueryName() {
            return this.savedQueryName;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("expression", om.valueToTree(this.getExpression()));
            data.set("savedQueryName", om.valueToTree(this.getSavedQueryName()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-resourcemanager.RosSavedQueryProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSavedQueryProps.Jsii$Proxy that = (RosSavedQueryProps.Jsii$Proxy) o;

            if (!expression.equals(that.expression)) return false;
            if (!savedQueryName.equals(that.savedQueryName)) return false;
            return this.description != null ? this.description.equals(that.description) : that.description == null;
        }

        @Override
        public final int hashCode() {
            int result = this.expression.hashCode();
            result = 31 * result + (this.savedQueryName.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            return result;
        }
    }
}

package com.aliyun.ros.cdk.fnf;

/**
 * Properties for defining a <code>ALIYUN::FNF::Flow</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:48.944Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fnf.$Module.class, fqn = "@alicloud/ros-cdk-fnf.RosFlowProps")
@software.amazon.jsii.Jsii.Proxy(RosFlowProps.Jsii$Proxy.class)
public interface RosFlowProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDefinition();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRequestId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRoleArn() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosFlowProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosFlowProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosFlowProps> {
        java.lang.Object definition;
        java.lang.Object name;
        java.lang.Object description;
        java.lang.Object requestId;
        java.lang.Object roleArn;

        /**
         * Sets the value of {@link RosFlowProps#getDefinition}
         * @param definition the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder definition(java.lang.String definition) {
            this.definition = definition;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowProps#getDefinition}
         * @param definition the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder definition(com.aliyun.ros.cdk.core.IResolvable definition) {
            this.definition = definition;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowProps#getRequestId}
         * @param requestId the value to be set.
         * @return {@code this}
         */
        public Builder requestId(java.lang.String requestId) {
            this.requestId = requestId;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowProps#getRequestId}
         * @param requestId the value to be set.
         * @return {@code this}
         */
        public Builder requestId(com.aliyun.ros.cdk.core.IResolvable requestId) {
            this.requestId = requestId;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowProps#getRoleArn}
         * @param roleArn the value to be set.
         * @return {@code this}
         */
        public Builder roleArn(java.lang.String roleArn) {
            this.roleArn = roleArn;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowProps#getRoleArn}
         * @param roleArn the value to be set.
         * @return {@code this}
         */
        public Builder roleArn(com.aliyun.ros.cdk.core.IResolvable roleArn) {
            this.roleArn = roleArn;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosFlowProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosFlowProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosFlowProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosFlowProps {
        private final java.lang.Object definition;
        private final java.lang.Object name;
        private final java.lang.Object description;
        private final java.lang.Object requestId;
        private final java.lang.Object roleArn;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.definition = software.amazon.jsii.Kernel.get(this, "definition", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.requestId = software.amazon.jsii.Kernel.get(this, "requestId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.roleArn = software.amazon.jsii.Kernel.get(this, "roleArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.definition = java.util.Objects.requireNonNull(builder.definition, "definition is required");
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.description = builder.description;
            this.requestId = builder.requestId;
            this.roleArn = builder.roleArn;
        }

        @Override
        public final java.lang.Object getDefinition() {
            return this.definition;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getRequestId() {
            return this.requestId;
        }

        @Override
        public final java.lang.Object getRoleArn() {
            return this.roleArn;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("definition", om.valueToTree(this.getDefinition()));
            data.set("name", om.valueToTree(this.getName()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getRequestId() != null) {
                data.set("requestId", om.valueToTree(this.getRequestId()));
            }
            if (this.getRoleArn() != null) {
                data.set("roleArn", om.valueToTree(this.getRoleArn()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fnf.RosFlowProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosFlowProps.Jsii$Proxy that = (RosFlowProps.Jsii$Proxy) o;

            if (!definition.equals(that.definition)) return false;
            if (!name.equals(that.name)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.requestId != null ? !this.requestId.equals(that.requestId) : that.requestId != null) return false;
            return this.roleArn != null ? this.roleArn.equals(that.roleArn) : that.roleArn == null;
        }

        @Override
        public final int hashCode() {
            int result = this.definition.hashCode();
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.requestId != null ? this.requestId.hashCode() : 0);
            result = 31 * result + (this.roleArn != null ? this.roleArn.hashCode() : 0);
            return result;
        }
    }
}

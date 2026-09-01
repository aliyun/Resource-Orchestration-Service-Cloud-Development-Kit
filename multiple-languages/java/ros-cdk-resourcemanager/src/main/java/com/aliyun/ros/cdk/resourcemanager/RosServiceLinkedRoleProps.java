package com.aliyun.ros.cdk.resourcemanager;

/**
 * Properties for defining a <code>RosServiceLinkedRole</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-servicelinkedrole
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T11:17:22.007Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.RosServiceLinkedRoleProps")
@software.amazon.jsii.Jsii.Proxy(RosServiceLinkedRoleProps.Jsii$Proxy.class)
public interface RosServiceLinkedRoleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getServiceName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCustomSuffix() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosServiceLinkedRoleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosServiceLinkedRoleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosServiceLinkedRoleProps> {
        java.lang.Object serviceName;
        java.lang.Object customSuffix;
        java.lang.Object description;

        /**
         * Sets the value of {@link RosServiceLinkedRoleProps#getServiceName}
         * @param serviceName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceName(java.lang.String serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceLinkedRoleProps#getServiceName}
         * @param serviceName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceName(com.aliyun.ros.cdk.core.IResolvable serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceLinkedRoleProps#getCustomSuffix}
         * @param customSuffix the value to be set.
         * @return {@code this}
         */
        public Builder customSuffix(java.lang.String customSuffix) {
            this.customSuffix = customSuffix;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceLinkedRoleProps#getCustomSuffix}
         * @param customSuffix the value to be set.
         * @return {@code this}
         */
        public Builder customSuffix(com.aliyun.ros.cdk.core.IResolvable customSuffix) {
            this.customSuffix = customSuffix;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceLinkedRoleProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceLinkedRoleProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosServiceLinkedRoleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosServiceLinkedRoleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosServiceLinkedRoleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosServiceLinkedRoleProps {
        private final java.lang.Object serviceName;
        private final java.lang.Object customSuffix;
        private final java.lang.Object description;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.serviceName = software.amazon.jsii.Kernel.get(this, "serviceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.customSuffix = software.amazon.jsii.Kernel.get(this, "customSuffix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.serviceName = java.util.Objects.requireNonNull(builder.serviceName, "serviceName is required");
            this.customSuffix = builder.customSuffix;
            this.description = builder.description;
        }

        @Override
        public final java.lang.Object getServiceName() {
            return this.serviceName;
        }

        @Override
        public final java.lang.Object getCustomSuffix() {
            return this.customSuffix;
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

            data.set("serviceName", om.valueToTree(this.getServiceName()));
            if (this.getCustomSuffix() != null) {
                data.set("customSuffix", om.valueToTree(this.getCustomSuffix()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-resourcemanager.RosServiceLinkedRoleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosServiceLinkedRoleProps.Jsii$Proxy that = (RosServiceLinkedRoleProps.Jsii$Proxy) o;

            if (!serviceName.equals(that.serviceName)) return false;
            if (this.customSuffix != null ? !this.customSuffix.equals(that.customSuffix) : that.customSuffix != null) return false;
            return this.description != null ? this.description.equals(that.description) : that.description == null;
        }

        @Override
        public final int hashCode() {
            int result = this.serviceName.hashCode();
            result = 31 * result + (this.customSuffix != null ? this.customSuffix.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            return result;
        }
    }
}

package com.aliyun.ros.cdk.oos;

/**
 * Properties for defining a <code>RosDeployRevision</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-deployrevision
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:58.538Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.RosDeployRevisionProps")
@software.amazon.jsii.Jsii.Proxy(RosDeployRevisionProps.Jsii$Proxy.class)
public interface RosDeployRevisionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getApplicationName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHooks() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLocation() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRevisionType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDeployRevisionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDeployRevisionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDeployRevisionProps> {
        java.lang.Object applicationName;
        java.lang.Object description;
        java.lang.Object hooks;
        java.lang.Object location;
        java.lang.Object revisionType;

        /**
         * Sets the value of {@link RosDeployRevisionProps#getApplicationName}
         * @param applicationName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder applicationName(java.lang.String applicationName) {
            this.applicationName = applicationName;
            return this;
        }

        /**
         * Sets the value of {@link RosDeployRevisionProps#getApplicationName}
         * @param applicationName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder applicationName(com.aliyun.ros.cdk.core.IResolvable applicationName) {
            this.applicationName = applicationName;
            return this;
        }

        /**
         * Sets the value of {@link RosDeployRevisionProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosDeployRevisionProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosDeployRevisionProps#getHooks}
         * @param hooks the value to be set.
         * @return {@code this}
         */
        public Builder hooks(com.aliyun.ros.cdk.core.IResolvable hooks) {
            this.hooks = hooks;
            return this;
        }

        /**
         * Sets the value of {@link RosDeployRevisionProps#getHooks}
         * @param hooks the value to be set.
         * @return {@code this}
         */
        public Builder hooks(java.util.Map<java.lang.String, ? extends java.lang.Object> hooks) {
            this.hooks = hooks;
            return this;
        }

        /**
         * Sets the value of {@link RosDeployRevisionProps#getLocation}
         * @param location the value to be set.
         * @return {@code this}
         */
        public Builder location(com.aliyun.ros.cdk.core.IResolvable location) {
            this.location = location;
            return this;
        }

        /**
         * Sets the value of {@link RosDeployRevisionProps#getLocation}
         * @param location the value to be set.
         * @return {@code this}
         */
        public Builder location(java.util.Map<java.lang.String, ? extends java.lang.Object> location) {
            this.location = location;
            return this;
        }

        /**
         * Sets the value of {@link RosDeployRevisionProps#getRevisionType}
         * @param revisionType the value to be set.
         * @return {@code this}
         */
        public Builder revisionType(java.lang.String revisionType) {
            this.revisionType = revisionType;
            return this;
        }

        /**
         * Sets the value of {@link RosDeployRevisionProps#getRevisionType}
         * @param revisionType the value to be set.
         * @return {@code this}
         */
        public Builder revisionType(com.aliyun.ros.cdk.core.IResolvable revisionType) {
            this.revisionType = revisionType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDeployRevisionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDeployRevisionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDeployRevisionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDeployRevisionProps {
        private final java.lang.Object applicationName;
        private final java.lang.Object description;
        private final java.lang.Object hooks;
        private final java.lang.Object location;
        private final java.lang.Object revisionType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.applicationName = software.amazon.jsii.Kernel.get(this, "applicationName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hooks = software.amazon.jsii.Kernel.get(this, "hooks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.location = software.amazon.jsii.Kernel.get(this, "location", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.revisionType = software.amazon.jsii.Kernel.get(this, "revisionType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.applicationName = java.util.Objects.requireNonNull(builder.applicationName, "applicationName is required");
            this.description = builder.description;
            this.hooks = builder.hooks;
            this.location = builder.location;
            this.revisionType = builder.revisionType;
        }

        @Override
        public final java.lang.Object getApplicationName() {
            return this.applicationName;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getHooks() {
            return this.hooks;
        }

        @Override
        public final java.lang.Object getLocation() {
            return this.location;
        }

        @Override
        public final java.lang.Object getRevisionType() {
            return this.revisionType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("applicationName", om.valueToTree(this.getApplicationName()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getHooks() != null) {
                data.set("hooks", om.valueToTree(this.getHooks()));
            }
            if (this.getLocation() != null) {
                data.set("location", om.valueToTree(this.getLocation()));
            }
            if (this.getRevisionType() != null) {
                data.set("revisionType", om.valueToTree(this.getRevisionType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oos.RosDeployRevisionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDeployRevisionProps.Jsii$Proxy that = (RosDeployRevisionProps.Jsii$Proxy) o;

            if (!applicationName.equals(that.applicationName)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.hooks != null ? !this.hooks.equals(that.hooks) : that.hooks != null) return false;
            if (this.location != null ? !this.location.equals(that.location) : that.location != null) return false;
            return this.revisionType != null ? this.revisionType.equals(that.revisionType) : that.revisionType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.applicationName.hashCode();
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.hooks != null ? this.hooks.hashCode() : 0);
            result = 31 * result + (this.location != null ? this.location.hashCode() : 0);
            result = 31 * result + (this.revisionType != null ? this.revisionType.hashCode() : 0);
            return result;
        }
    }
}

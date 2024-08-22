package com.aliyun.ros.cdk.cloudsso;

/**
 * Properties for defining a <code>RosAccessConfiguration</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessconfiguration
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:18.525Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudsso.$Module.class, fqn = "@alicloud/ros-cdk-cloudsso.RosAccessConfigurationProps")
@software.amazon.jsii.Jsii.Proxy(RosAccessConfigurationProps.Jsii$Proxy.class)
public interface RosAccessConfigurationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccessConfigurationName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDirectoryId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRelayState() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSessionDuration() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAccessConfigurationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAccessConfigurationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAccessConfigurationProps> {
        java.lang.Object accessConfigurationName;
        java.lang.Object directoryId;
        java.lang.Object description;
        java.lang.Object relayState;
        java.lang.Object sessionDuration;

        /**
         * Sets the value of {@link RosAccessConfigurationProps#getAccessConfigurationName}
         * @param accessConfigurationName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accessConfigurationName(java.lang.String accessConfigurationName) {
            this.accessConfigurationName = accessConfigurationName;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessConfigurationProps#getAccessConfigurationName}
         * @param accessConfigurationName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accessConfigurationName(com.aliyun.ros.cdk.core.IResolvable accessConfigurationName) {
            this.accessConfigurationName = accessConfigurationName;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessConfigurationProps#getDirectoryId}
         * @param directoryId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder directoryId(java.lang.String directoryId) {
            this.directoryId = directoryId;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessConfigurationProps#getDirectoryId}
         * @param directoryId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder directoryId(com.aliyun.ros.cdk.core.IResolvable directoryId) {
            this.directoryId = directoryId;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessConfigurationProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessConfigurationProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessConfigurationProps#getRelayState}
         * @param relayState the value to be set.
         * @return {@code this}
         */
        public Builder relayState(java.lang.String relayState) {
            this.relayState = relayState;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessConfigurationProps#getRelayState}
         * @param relayState the value to be set.
         * @return {@code this}
         */
        public Builder relayState(com.aliyun.ros.cdk.core.IResolvable relayState) {
            this.relayState = relayState;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessConfigurationProps#getSessionDuration}
         * @param sessionDuration the value to be set.
         * @return {@code this}
         */
        public Builder sessionDuration(java.lang.Number sessionDuration) {
            this.sessionDuration = sessionDuration;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessConfigurationProps#getSessionDuration}
         * @param sessionDuration the value to be set.
         * @return {@code this}
         */
        public Builder sessionDuration(com.aliyun.ros.cdk.core.IResolvable sessionDuration) {
            this.sessionDuration = sessionDuration;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAccessConfigurationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAccessConfigurationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAccessConfigurationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAccessConfigurationProps {
        private final java.lang.Object accessConfigurationName;
        private final java.lang.Object directoryId;
        private final java.lang.Object description;
        private final java.lang.Object relayState;
        private final java.lang.Object sessionDuration;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accessConfigurationName = software.amazon.jsii.Kernel.get(this, "accessConfigurationName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.directoryId = software.amazon.jsii.Kernel.get(this, "directoryId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.relayState = software.amazon.jsii.Kernel.get(this, "relayState", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sessionDuration = software.amazon.jsii.Kernel.get(this, "sessionDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accessConfigurationName = java.util.Objects.requireNonNull(builder.accessConfigurationName, "accessConfigurationName is required");
            this.directoryId = java.util.Objects.requireNonNull(builder.directoryId, "directoryId is required");
            this.description = builder.description;
            this.relayState = builder.relayState;
            this.sessionDuration = builder.sessionDuration;
        }

        @Override
        public final java.lang.Object getAccessConfigurationName() {
            return this.accessConfigurationName;
        }

        @Override
        public final java.lang.Object getDirectoryId() {
            return this.directoryId;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getRelayState() {
            return this.relayState;
        }

        @Override
        public final java.lang.Object getSessionDuration() {
            return this.sessionDuration;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("accessConfigurationName", om.valueToTree(this.getAccessConfigurationName()));
            data.set("directoryId", om.valueToTree(this.getDirectoryId()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getRelayState() != null) {
                data.set("relayState", om.valueToTree(this.getRelayState()));
            }
            if (this.getSessionDuration() != null) {
                data.set("sessionDuration", om.valueToTree(this.getSessionDuration()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudsso.RosAccessConfigurationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAccessConfigurationProps.Jsii$Proxy that = (RosAccessConfigurationProps.Jsii$Proxy) o;

            if (!accessConfigurationName.equals(that.accessConfigurationName)) return false;
            if (!directoryId.equals(that.directoryId)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.relayState != null ? !this.relayState.equals(that.relayState) : that.relayState != null) return false;
            return this.sessionDuration != null ? this.sessionDuration.equals(that.sessionDuration) : that.sessionDuration == null;
        }

        @Override
        public final int hashCode() {
            int result = this.accessConfigurationName.hashCode();
            result = 31 * result + (this.directoryId.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.relayState != null ? this.relayState.hashCode() : 0);
            result = 31 * result + (this.sessionDuration != null ? this.sessionDuration.hashCode() : 0);
            return result;
        }
    }
}

package com.aliyun.ros.cdk.brainindustrial;

/**
 * Properties for defining a <code>RosPidOrganization</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-brainindustrial-pidorganization
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-03-01T09:16:50.145Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.brainindustrial.$Module.class, fqn = "@alicloud/ros-cdk-brainindustrial.RosPidOrganizationProps")
@software.amazon.jsii.Jsii.Proxy(RosPidOrganizationProps.Jsii$Proxy.class)
public interface RosPidOrganizationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPidOrganizationName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getParentPidOrganizationId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosPidOrganizationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosPidOrganizationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosPidOrganizationProps> {
        java.lang.Object pidOrganizationName;
        java.lang.Object parentPidOrganizationId;

        /**
         * Sets the value of {@link RosPidOrganizationProps#getPidOrganizationName}
         * @param pidOrganizationName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder pidOrganizationName(java.lang.String pidOrganizationName) {
            this.pidOrganizationName = pidOrganizationName;
            return this;
        }

        /**
         * Sets the value of {@link RosPidOrganizationProps#getPidOrganizationName}
         * @param pidOrganizationName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder pidOrganizationName(com.aliyun.ros.cdk.core.IResolvable pidOrganizationName) {
            this.pidOrganizationName = pidOrganizationName;
            return this;
        }

        /**
         * Sets the value of {@link RosPidOrganizationProps#getParentPidOrganizationId}
         * @param parentPidOrganizationId the value to be set.
         * @return {@code this}
         */
        public Builder parentPidOrganizationId(java.lang.String parentPidOrganizationId) {
            this.parentPidOrganizationId = parentPidOrganizationId;
            return this;
        }

        /**
         * Sets the value of {@link RosPidOrganizationProps#getParentPidOrganizationId}
         * @param parentPidOrganizationId the value to be set.
         * @return {@code this}
         */
        public Builder parentPidOrganizationId(com.aliyun.ros.cdk.core.IResolvable parentPidOrganizationId) {
            this.parentPidOrganizationId = parentPidOrganizationId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosPidOrganizationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosPidOrganizationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosPidOrganizationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosPidOrganizationProps {
        private final java.lang.Object pidOrganizationName;
        private final java.lang.Object parentPidOrganizationId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.pidOrganizationName = software.amazon.jsii.Kernel.get(this, "pidOrganizationName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.parentPidOrganizationId = software.amazon.jsii.Kernel.get(this, "parentPidOrganizationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.pidOrganizationName = java.util.Objects.requireNonNull(builder.pidOrganizationName, "pidOrganizationName is required");
            this.parentPidOrganizationId = builder.parentPidOrganizationId;
        }

        @Override
        public final java.lang.Object getPidOrganizationName() {
            return this.pidOrganizationName;
        }

        @Override
        public final java.lang.Object getParentPidOrganizationId() {
            return this.parentPidOrganizationId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("pidOrganizationName", om.valueToTree(this.getPidOrganizationName()));
            if (this.getParentPidOrganizationId() != null) {
                data.set("parentPidOrganizationId", om.valueToTree(this.getParentPidOrganizationId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-brainindustrial.RosPidOrganizationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosPidOrganizationProps.Jsii$Proxy that = (RosPidOrganizationProps.Jsii$Proxy) o;

            if (!pidOrganizationName.equals(that.pidOrganizationName)) return false;
            return this.parentPidOrganizationId != null ? this.parentPidOrganizationId.equals(that.parentPidOrganizationId) : that.parentPidOrganizationId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.pidOrganizationName.hashCode();
            result = 31 * result + (this.parentPidOrganizationId != null ? this.parentPidOrganizationId.hashCode() : 0);
            return result;
        }
    }
}

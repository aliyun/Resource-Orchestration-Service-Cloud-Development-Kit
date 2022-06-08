package com.aliyun.ros.cdk.brainindustrial;

/**
 * Properties for defining a `ALIYUN::BrainIndustrial::PidOrganization`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.59.0 (build eb02c92)", date = "2022-06-08T09:23:33.776Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.brainindustrial.$Module.class, fqn = "@alicloud/ros-cdk-brainindustrial.PidOrganizationProps")
@software.amazon.jsii.Jsii.Proxy(PidOrganizationProps.Jsii$Proxy.class)
public interface PidOrganizationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property pidOrganizationName: PidOrganizationName.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPidOrganizationName();

    /**
     * Property parentPidOrganizationId: ParentPidOrganizationId.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getParentPidOrganizationId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link PidOrganizationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link PidOrganizationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<PidOrganizationProps> {
        java.lang.Object pidOrganizationName;
        java.lang.Object parentPidOrganizationId;

        /**
         * Sets the value of {@link PidOrganizationProps#getPidOrganizationName}
         * @param pidOrganizationName Property pidOrganizationName: PidOrganizationName. This parameter is required.
         * @return {@code this}
         */
        public Builder pidOrganizationName(java.lang.String pidOrganizationName) {
            this.pidOrganizationName = pidOrganizationName;
            return this;
        }

        /**
         * Sets the value of {@link PidOrganizationProps#getPidOrganizationName}
         * @param pidOrganizationName Property pidOrganizationName: PidOrganizationName. This parameter is required.
         * @return {@code this}
         */
        public Builder pidOrganizationName(com.aliyun.ros.cdk.core.IResolvable pidOrganizationName) {
            this.pidOrganizationName = pidOrganizationName;
            return this;
        }

        /**
         * Sets the value of {@link PidOrganizationProps#getParentPidOrganizationId}
         * @param parentPidOrganizationId Property parentPidOrganizationId: ParentPidOrganizationId.
         * @return {@code this}
         */
        public Builder parentPidOrganizationId(java.lang.String parentPidOrganizationId) {
            this.parentPidOrganizationId = parentPidOrganizationId;
            return this;
        }

        /**
         * Sets the value of {@link PidOrganizationProps#getParentPidOrganizationId}
         * @param parentPidOrganizationId Property parentPidOrganizationId: ParentPidOrganizationId.
         * @return {@code this}
         */
        public Builder parentPidOrganizationId(com.aliyun.ros.cdk.core.IResolvable parentPidOrganizationId) {
            this.parentPidOrganizationId = parentPidOrganizationId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link PidOrganizationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public PidOrganizationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link PidOrganizationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PidOrganizationProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-brainindustrial.PidOrganizationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            PidOrganizationProps.Jsii$Proxy that = (PidOrganizationProps.Jsii$Proxy) o;

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

package com.aliyun.ros.cdk.brainindustrial;

/**
 * Properties for defining a `ALIYUN::BrainIndustrial::PidProject`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T01:43:49.454Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.brainindustrial.$Module.class, fqn = "@alicloud/ros-cdk-brainindustrial.PidProjectProps")
@software.amazon.jsii.Jsii.Proxy(PidProjectProps.Jsii$Proxy.class)
public interface PidProjectProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property pidOrganizationId: PidOrganizationId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPidOrganizationId();

    /**
     * Property pidProjectName: PidProjectName.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPidProjectName();

    /**
     * Property pidProjectDesc: PidProjectDesc.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPidProjectDesc() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link PidProjectProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link PidProjectProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<PidProjectProps> {
        java.lang.Object pidOrganizationId;
        java.lang.Object pidProjectName;
        java.lang.Object pidProjectDesc;

        /**
         * Sets the value of {@link PidProjectProps#getPidOrganizationId}
         * @param pidOrganizationId Property pidOrganizationId: PidOrganizationId. This parameter is required.
         * @return {@code this}
         */
        public Builder pidOrganizationId(java.lang.String pidOrganizationId) {
            this.pidOrganizationId = pidOrganizationId;
            return this;
        }

        /**
         * Sets the value of {@link PidProjectProps#getPidOrganizationId}
         * @param pidOrganizationId Property pidOrganizationId: PidOrganizationId. This parameter is required.
         * @return {@code this}
         */
        public Builder pidOrganizationId(com.aliyun.ros.cdk.core.IResolvable pidOrganizationId) {
            this.pidOrganizationId = pidOrganizationId;
            return this;
        }

        /**
         * Sets the value of {@link PidProjectProps#getPidProjectName}
         * @param pidProjectName Property pidProjectName: PidProjectName. This parameter is required.
         * @return {@code this}
         */
        public Builder pidProjectName(java.lang.String pidProjectName) {
            this.pidProjectName = pidProjectName;
            return this;
        }

        /**
         * Sets the value of {@link PidProjectProps#getPidProjectName}
         * @param pidProjectName Property pidProjectName: PidProjectName. This parameter is required.
         * @return {@code this}
         */
        public Builder pidProjectName(com.aliyun.ros.cdk.core.IResolvable pidProjectName) {
            this.pidProjectName = pidProjectName;
            return this;
        }

        /**
         * Sets the value of {@link PidProjectProps#getPidProjectDesc}
         * @param pidProjectDesc Property pidProjectDesc: PidProjectDesc.
         * @return {@code this}
         */
        public Builder pidProjectDesc(java.lang.String pidProjectDesc) {
            this.pidProjectDesc = pidProjectDesc;
            return this;
        }

        /**
         * Sets the value of {@link PidProjectProps#getPidProjectDesc}
         * @param pidProjectDesc Property pidProjectDesc: PidProjectDesc.
         * @return {@code this}
         */
        public Builder pidProjectDesc(com.aliyun.ros.cdk.core.IResolvable pidProjectDesc) {
            this.pidProjectDesc = pidProjectDesc;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link PidProjectProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public PidProjectProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link PidProjectProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PidProjectProps {
        private final java.lang.Object pidOrganizationId;
        private final java.lang.Object pidProjectName;
        private final java.lang.Object pidProjectDesc;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.pidOrganizationId = software.amazon.jsii.Kernel.get(this, "pidOrganizationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pidProjectName = software.amazon.jsii.Kernel.get(this, "pidProjectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pidProjectDesc = software.amazon.jsii.Kernel.get(this, "pidProjectDesc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.pidOrganizationId = java.util.Objects.requireNonNull(builder.pidOrganizationId, "pidOrganizationId is required");
            this.pidProjectName = java.util.Objects.requireNonNull(builder.pidProjectName, "pidProjectName is required");
            this.pidProjectDesc = builder.pidProjectDesc;
        }

        @Override
        public final java.lang.Object getPidOrganizationId() {
            return this.pidOrganizationId;
        }

        @Override
        public final java.lang.Object getPidProjectName() {
            return this.pidProjectName;
        }

        @Override
        public final java.lang.Object getPidProjectDesc() {
            return this.pidProjectDesc;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("pidOrganizationId", om.valueToTree(this.getPidOrganizationId()));
            data.set("pidProjectName", om.valueToTree(this.getPidProjectName()));
            if (this.getPidProjectDesc() != null) {
                data.set("pidProjectDesc", om.valueToTree(this.getPidProjectDesc()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-brainindustrial.PidProjectProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            PidProjectProps.Jsii$Proxy that = (PidProjectProps.Jsii$Proxy) o;

            if (!pidOrganizationId.equals(that.pidOrganizationId)) return false;
            if (!pidProjectName.equals(that.pidProjectName)) return false;
            return this.pidProjectDesc != null ? this.pidProjectDesc.equals(that.pidProjectDesc) : that.pidProjectDesc == null;
        }

        @Override
        public final int hashCode() {
            int result = this.pidOrganizationId.hashCode();
            result = 31 * result + (this.pidProjectName.hashCode());
            result = 31 * result + (this.pidProjectDesc != null ? this.pidProjectDesc.hashCode() : 0);
            return result;
        }
    }
}

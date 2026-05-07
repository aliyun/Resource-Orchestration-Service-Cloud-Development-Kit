package com.aliyun.ros.cdk.cdn;

/**
 * Properties for defining a <code>FcTrigger</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-fctrigger
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:46.207Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cdn.$Module.class, fqn = "@alicloud/ros-cdk-cdn.FcTriggerProps")
@software.amazon.jsii.Jsii.Proxy(FcTriggerProps.Jsii$Proxy.class)
public interface FcTriggerProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property eventMetaName: The event meta name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEventMetaName();

    /**
     * Property eventMetaVersion: The event meta version.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEventMetaVersion();

    /**
     * Property notes: The notes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNotes();

    /**
     * Property roleArn: The role ARN.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRoleArn();

    /**
     * Property sourceArn: The source ARN.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceArn();

    /**
     * Property triggerArn: The trigger ARN.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTriggerArn();

    /**
     * Property functionArn: The function ARN.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFunctionArn() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link FcTriggerProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link FcTriggerProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<FcTriggerProps> {
        java.lang.Object eventMetaName;
        java.lang.Object eventMetaVersion;
        java.lang.Object notes;
        java.lang.Object roleArn;
        java.lang.Object sourceArn;
        java.lang.Object triggerArn;
        java.lang.Object functionArn;

        /**
         * Sets the value of {@link FcTriggerProps#getEventMetaName}
         * @param eventMetaName Property eventMetaName: The event meta name. This parameter is required.
         * @return {@code this}
         */
        public Builder eventMetaName(java.lang.String eventMetaName) {
            this.eventMetaName = eventMetaName;
            return this;
        }

        /**
         * Sets the value of {@link FcTriggerProps#getEventMetaName}
         * @param eventMetaName Property eventMetaName: The event meta name. This parameter is required.
         * @return {@code this}
         */
        public Builder eventMetaName(com.aliyun.ros.cdk.core.IResolvable eventMetaName) {
            this.eventMetaName = eventMetaName;
            return this;
        }

        /**
         * Sets the value of {@link FcTriggerProps#getEventMetaVersion}
         * @param eventMetaVersion Property eventMetaVersion: The event meta version. This parameter is required.
         * @return {@code this}
         */
        public Builder eventMetaVersion(java.lang.String eventMetaVersion) {
            this.eventMetaVersion = eventMetaVersion;
            return this;
        }

        /**
         * Sets the value of {@link FcTriggerProps#getEventMetaVersion}
         * @param eventMetaVersion Property eventMetaVersion: The event meta version. This parameter is required.
         * @return {@code this}
         */
        public Builder eventMetaVersion(com.aliyun.ros.cdk.core.IResolvable eventMetaVersion) {
            this.eventMetaVersion = eventMetaVersion;
            return this;
        }

        /**
         * Sets the value of {@link FcTriggerProps#getNotes}
         * @param notes Property notes: The notes. This parameter is required.
         * @return {@code this}
         */
        public Builder notes(java.lang.String notes) {
            this.notes = notes;
            return this;
        }

        /**
         * Sets the value of {@link FcTriggerProps#getNotes}
         * @param notes Property notes: The notes. This parameter is required.
         * @return {@code this}
         */
        public Builder notes(com.aliyun.ros.cdk.core.IResolvable notes) {
            this.notes = notes;
            return this;
        }

        /**
         * Sets the value of {@link FcTriggerProps#getRoleArn}
         * @param roleArn Property roleArn: The role ARN. This parameter is required.
         * @return {@code this}
         */
        public Builder roleArn(java.lang.String roleArn) {
            this.roleArn = roleArn;
            return this;
        }

        /**
         * Sets the value of {@link FcTriggerProps#getRoleArn}
         * @param roleArn Property roleArn: The role ARN. This parameter is required.
         * @return {@code this}
         */
        public Builder roleArn(com.aliyun.ros.cdk.core.IResolvable roleArn) {
            this.roleArn = roleArn;
            return this;
        }

        /**
         * Sets the value of {@link FcTriggerProps#getSourceArn}
         * @param sourceArn Property sourceArn: The source ARN. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceArn(java.lang.String sourceArn) {
            this.sourceArn = sourceArn;
            return this;
        }

        /**
         * Sets the value of {@link FcTriggerProps#getSourceArn}
         * @param sourceArn Property sourceArn: The source ARN. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceArn(com.aliyun.ros.cdk.core.IResolvable sourceArn) {
            this.sourceArn = sourceArn;
            return this;
        }

        /**
         * Sets the value of {@link FcTriggerProps#getTriggerArn}
         * @param triggerArn Property triggerArn: The trigger ARN. This parameter is required.
         * @return {@code this}
         */
        public Builder triggerArn(java.lang.String triggerArn) {
            this.triggerArn = triggerArn;
            return this;
        }

        /**
         * Sets the value of {@link FcTriggerProps#getTriggerArn}
         * @param triggerArn Property triggerArn: The trigger ARN. This parameter is required.
         * @return {@code this}
         */
        public Builder triggerArn(com.aliyun.ros.cdk.core.IResolvable triggerArn) {
            this.triggerArn = triggerArn;
            return this;
        }

        /**
         * Sets the value of {@link FcTriggerProps#getFunctionArn}
         * @param functionArn Property functionArn: The function ARN.
         * @return {@code this}
         */
        public Builder functionArn(java.lang.String functionArn) {
            this.functionArn = functionArn;
            return this;
        }

        /**
         * Sets the value of {@link FcTriggerProps#getFunctionArn}
         * @param functionArn Property functionArn: The function ARN.
         * @return {@code this}
         */
        public Builder functionArn(com.aliyun.ros.cdk.core.IResolvable functionArn) {
            this.functionArn = functionArn;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link FcTriggerProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public FcTriggerProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link FcTriggerProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements FcTriggerProps {
        private final java.lang.Object eventMetaName;
        private final java.lang.Object eventMetaVersion;
        private final java.lang.Object notes;
        private final java.lang.Object roleArn;
        private final java.lang.Object sourceArn;
        private final java.lang.Object triggerArn;
        private final java.lang.Object functionArn;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.eventMetaName = software.amazon.jsii.Kernel.get(this, "eventMetaName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.eventMetaVersion = software.amazon.jsii.Kernel.get(this, "eventMetaVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.notes = software.amazon.jsii.Kernel.get(this, "notes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.roleArn = software.amazon.jsii.Kernel.get(this, "roleArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceArn = software.amazon.jsii.Kernel.get(this, "sourceArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.triggerArn = software.amazon.jsii.Kernel.get(this, "triggerArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.functionArn = software.amazon.jsii.Kernel.get(this, "functionArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.eventMetaName = java.util.Objects.requireNonNull(builder.eventMetaName, "eventMetaName is required");
            this.eventMetaVersion = java.util.Objects.requireNonNull(builder.eventMetaVersion, "eventMetaVersion is required");
            this.notes = java.util.Objects.requireNonNull(builder.notes, "notes is required");
            this.roleArn = java.util.Objects.requireNonNull(builder.roleArn, "roleArn is required");
            this.sourceArn = java.util.Objects.requireNonNull(builder.sourceArn, "sourceArn is required");
            this.triggerArn = java.util.Objects.requireNonNull(builder.triggerArn, "triggerArn is required");
            this.functionArn = builder.functionArn;
        }

        @Override
        public final java.lang.Object getEventMetaName() {
            return this.eventMetaName;
        }

        @Override
        public final java.lang.Object getEventMetaVersion() {
            return this.eventMetaVersion;
        }

        @Override
        public final java.lang.Object getNotes() {
            return this.notes;
        }

        @Override
        public final java.lang.Object getRoleArn() {
            return this.roleArn;
        }

        @Override
        public final java.lang.Object getSourceArn() {
            return this.sourceArn;
        }

        @Override
        public final java.lang.Object getTriggerArn() {
            return this.triggerArn;
        }

        @Override
        public final java.lang.Object getFunctionArn() {
            return this.functionArn;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("eventMetaName", om.valueToTree(this.getEventMetaName()));
            data.set("eventMetaVersion", om.valueToTree(this.getEventMetaVersion()));
            data.set("notes", om.valueToTree(this.getNotes()));
            data.set("roleArn", om.valueToTree(this.getRoleArn()));
            data.set("sourceArn", om.valueToTree(this.getSourceArn()));
            data.set("triggerArn", om.valueToTree(this.getTriggerArn()));
            if (this.getFunctionArn() != null) {
                data.set("functionArn", om.valueToTree(this.getFunctionArn()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cdn.FcTriggerProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            FcTriggerProps.Jsii$Proxy that = (FcTriggerProps.Jsii$Proxy) o;

            if (!eventMetaName.equals(that.eventMetaName)) return false;
            if (!eventMetaVersion.equals(that.eventMetaVersion)) return false;
            if (!notes.equals(that.notes)) return false;
            if (!roleArn.equals(that.roleArn)) return false;
            if (!sourceArn.equals(that.sourceArn)) return false;
            if (!triggerArn.equals(that.triggerArn)) return false;
            return this.functionArn != null ? this.functionArn.equals(that.functionArn) : that.functionArn == null;
        }

        @Override
        public final int hashCode() {
            int result = this.eventMetaName.hashCode();
            result = 31 * result + (this.eventMetaVersion.hashCode());
            result = 31 * result + (this.notes.hashCode());
            result = 31 * result + (this.roleArn.hashCode());
            result = 31 * result + (this.sourceArn.hashCode());
            result = 31 * result + (this.triggerArn.hashCode());
            result = 31 * result + (this.functionArn != null ? this.functionArn.hashCode() : 0);
            return result;
        }
    }
}

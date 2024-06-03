package com.aliyun.ros.cdk.sls;

/**
 * Properties for defining a <code>Etl</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-etl
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:54.553Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.EtlProps")
@software.amazon.jsii.Jsii.Proxy(EtlProps.Jsii$Proxy.class)
public interface EtlProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property configuration: The configuration of ETL task.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getConfiguration();

    /**
     * Property displayName: ETL display name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDisplayName();

    /**
     * Property name: ETL name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     * Property projectName: Project name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProjectName();

    /**
     * Property schedule: Task scheduling strategy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSchedule();

    /**
     * Property description: ETL description message.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link EtlProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link EtlProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<EtlProps> {
        java.lang.Object configuration;
        java.lang.Object displayName;
        java.lang.Object name;
        java.lang.Object projectName;
        java.lang.Object schedule;
        java.lang.Object description;

        /**
         * Sets the value of {@link EtlProps#getConfiguration}
         * @param configuration Property configuration: The configuration of ETL task. This parameter is required.
         * @return {@code this}
         */
        public Builder configuration(com.aliyun.ros.cdk.core.IResolvable configuration) {
            this.configuration = configuration;
            return this;
        }

        /**
         * Sets the value of {@link EtlProps#getConfiguration}
         * @param configuration Property configuration: The configuration of ETL task. This parameter is required.
         * @return {@code this}
         */
        public Builder configuration(com.aliyun.ros.cdk.sls.RosEtl.ConfigurationProperty configuration) {
            this.configuration = configuration;
            return this;
        }

        /**
         * Sets the value of {@link EtlProps#getDisplayName}
         * @param displayName Property displayName: ETL display name. This parameter is required.
         * @return {@code this}
         */
        public Builder displayName(java.lang.String displayName) {
            this.displayName = displayName;
            return this;
        }

        /**
         * Sets the value of {@link EtlProps#getDisplayName}
         * @param displayName Property displayName: ETL display name. This parameter is required.
         * @return {@code this}
         */
        public Builder displayName(com.aliyun.ros.cdk.core.IResolvable displayName) {
            this.displayName = displayName;
            return this;
        }

        /**
         * Sets the value of {@link EtlProps#getName}
         * @param name Property name: ETL name. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link EtlProps#getName}
         * @param name Property name: ETL name. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link EtlProps#getProjectName}
         * @param projectName Property projectName: Project name. This parameter is required.
         * @return {@code this}
         */
        public Builder projectName(java.lang.String projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link EtlProps#getProjectName}
         * @param projectName Property projectName: Project name. This parameter is required.
         * @return {@code this}
         */
        public Builder projectName(com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link EtlProps#getSchedule}
         * @param schedule Property schedule: Task scheduling strategy. This parameter is required.
         * @return {@code this}
         */
        public Builder schedule(com.aliyun.ros.cdk.core.IResolvable schedule) {
            this.schedule = schedule;
            return this;
        }

        /**
         * Sets the value of {@link EtlProps#getSchedule}
         * @param schedule Property schedule: Task scheduling strategy. This parameter is required.
         * @return {@code this}
         */
        public Builder schedule(com.aliyun.ros.cdk.sls.RosEtl.ScheduleProperty schedule) {
            this.schedule = schedule;
            return this;
        }

        /**
         * Sets the value of {@link EtlProps#getDescription}
         * @param description Property description: ETL description message.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link EtlProps#getDescription}
         * @param description Property description: ETL description message.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link EtlProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public EtlProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link EtlProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EtlProps {
        private final java.lang.Object configuration;
        private final java.lang.Object displayName;
        private final java.lang.Object name;
        private final java.lang.Object projectName;
        private final java.lang.Object schedule;
        private final java.lang.Object description;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.configuration = software.amazon.jsii.Kernel.get(this, "configuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.displayName = software.amazon.jsii.Kernel.get(this, "displayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.projectName = software.amazon.jsii.Kernel.get(this, "projectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.schedule = software.amazon.jsii.Kernel.get(this, "schedule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.configuration = java.util.Objects.requireNonNull(builder.configuration, "configuration is required");
            this.displayName = java.util.Objects.requireNonNull(builder.displayName, "displayName is required");
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.projectName = java.util.Objects.requireNonNull(builder.projectName, "projectName is required");
            this.schedule = java.util.Objects.requireNonNull(builder.schedule, "schedule is required");
            this.description = builder.description;
        }

        @Override
        public final java.lang.Object getConfiguration() {
            return this.configuration;
        }

        @Override
        public final java.lang.Object getDisplayName() {
            return this.displayName;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getProjectName() {
            return this.projectName;
        }

        @Override
        public final java.lang.Object getSchedule() {
            return this.schedule;
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

            data.set("configuration", om.valueToTree(this.getConfiguration()));
            data.set("displayName", om.valueToTree(this.getDisplayName()));
            data.set("name", om.valueToTree(this.getName()));
            data.set("projectName", om.valueToTree(this.getProjectName()));
            data.set("schedule", om.valueToTree(this.getSchedule()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.EtlProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            EtlProps.Jsii$Proxy that = (EtlProps.Jsii$Proxy) o;

            if (!configuration.equals(that.configuration)) return false;
            if (!displayName.equals(that.displayName)) return false;
            if (!name.equals(that.name)) return false;
            if (!projectName.equals(that.projectName)) return false;
            if (!schedule.equals(that.schedule)) return false;
            return this.description != null ? this.description.equals(that.description) : that.description == null;
        }

        @Override
        public final int hashCode() {
            int result = this.configuration.hashCode();
            result = 31 * result + (this.displayName.hashCode());
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.projectName.hashCode());
            result = 31 * result + (this.schedule.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            return result;
        }
    }
}

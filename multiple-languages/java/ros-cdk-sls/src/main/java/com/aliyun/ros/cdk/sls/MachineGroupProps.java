package com.aliyun.ros.cdk.sls;

/**
 * Properties for defining a `ALIYUN::SLS::MachineGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.599Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.MachineGroupProps")
@software.amazon.jsii.Jsii.Proxy(MachineGroupProps.Jsii$Proxy.class)
public interface MachineGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getGroupAttribute() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getGroupName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getGroupType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getMachineIdentifyType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMachineList() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getProjectName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link MachineGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link MachineGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<MachineGroupProps> {
        private java.lang.String groupAttribute;
        private java.lang.String groupName;
        private java.lang.String groupType;
        private java.lang.String machineIdentifyType;
        private java.lang.Object machineList;
        private java.lang.String projectName;

        /**
         * Sets the value of {@link MachineGroupProps#getGroupAttribute}
         * @param groupAttribute the value to be set.
         * @return {@code this}
         */
        public Builder groupAttribute(java.lang.String groupAttribute) {
            this.groupAttribute = groupAttribute;
            return this;
        }

        /**
         * Sets the value of {@link MachineGroupProps#getGroupName}
         * @param groupName the value to be set.
         * @return {@code this}
         */
        public Builder groupName(java.lang.String groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link MachineGroupProps#getGroupType}
         * @param groupType the value to be set.
         * @return {@code this}
         */
        public Builder groupType(java.lang.String groupType) {
            this.groupType = groupType;
            return this;
        }

        /**
         * Sets the value of {@link MachineGroupProps#getMachineIdentifyType}
         * @param machineIdentifyType the value to be set.
         * @return {@code this}
         */
        public Builder machineIdentifyType(java.lang.String machineIdentifyType) {
            this.machineIdentifyType = machineIdentifyType;
            return this;
        }

        /**
         * Sets the value of {@link MachineGroupProps#getMachineList}
         * @param machineList the value to be set.
         * @return {@code this}
         */
        public Builder machineList(java.util.List<? extends java.lang.Object> machineList) {
            this.machineList = machineList;
            return this;
        }

        /**
         * Sets the value of {@link MachineGroupProps#getMachineList}
         * @param machineList the value to be set.
         * @return {@code this}
         */
        public Builder machineList(com.aliyun.ros.cdk.core.IResolvable machineList) {
            this.machineList = machineList;
            return this;
        }

        /**
         * Sets the value of {@link MachineGroupProps#getProjectName}
         * @param projectName the value to be set.
         * @return {@code this}
         */
        public Builder projectName(java.lang.String projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link MachineGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public MachineGroupProps build() {
            return new Jsii$Proxy(groupAttribute, groupName, groupType, machineIdentifyType, machineList, projectName);
        }
    }

    /**
     * An implementation for {@link MachineGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MachineGroupProps {
        private final java.lang.String groupAttribute;
        private final java.lang.String groupName;
        private final java.lang.String groupType;
        private final java.lang.String machineIdentifyType;
        private final java.lang.Object machineList;
        private final java.lang.String projectName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.groupAttribute = software.amazon.jsii.Kernel.get(this, "groupAttribute", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.groupName = software.amazon.jsii.Kernel.get(this, "groupName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.groupType = software.amazon.jsii.Kernel.get(this, "groupType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.machineIdentifyType = software.amazon.jsii.Kernel.get(this, "machineIdentifyType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.machineList = software.amazon.jsii.Kernel.get(this, "machineList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.projectName = software.amazon.jsii.Kernel.get(this, "projectName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String groupAttribute, final java.lang.String groupName, final java.lang.String groupType, final java.lang.String machineIdentifyType, final java.lang.Object machineList, final java.lang.String projectName) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.groupAttribute = groupAttribute;
            this.groupName = groupName;
            this.groupType = groupType;
            this.machineIdentifyType = machineIdentifyType;
            this.machineList = machineList;
            this.projectName = projectName;
        }

        @Override
        public final java.lang.String getGroupAttribute() {
            return this.groupAttribute;
        }

        @Override
        public final java.lang.String getGroupName() {
            return this.groupName;
        }

        @Override
        public final java.lang.String getGroupType() {
            return this.groupType;
        }

        @Override
        public final java.lang.String getMachineIdentifyType() {
            return this.machineIdentifyType;
        }

        @Override
        public final java.lang.Object getMachineList() {
            return this.machineList;
        }

        @Override
        public final java.lang.String getProjectName() {
            return this.projectName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getGroupAttribute() != null) {
                data.set("groupAttribute", om.valueToTree(this.getGroupAttribute()));
            }
            if (this.getGroupName() != null) {
                data.set("groupName", om.valueToTree(this.getGroupName()));
            }
            if (this.getGroupType() != null) {
                data.set("groupType", om.valueToTree(this.getGroupType()));
            }
            if (this.getMachineIdentifyType() != null) {
                data.set("machineIdentifyType", om.valueToTree(this.getMachineIdentifyType()));
            }
            if (this.getMachineList() != null) {
                data.set("machineList", om.valueToTree(this.getMachineList()));
            }
            if (this.getProjectName() != null) {
                data.set("projectName", om.valueToTree(this.getProjectName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.MachineGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            MachineGroupProps.Jsii$Proxy that = (MachineGroupProps.Jsii$Proxy) o;

            if (this.groupAttribute != null ? !this.groupAttribute.equals(that.groupAttribute) : that.groupAttribute != null) return false;
            if (this.groupName != null ? !this.groupName.equals(that.groupName) : that.groupName != null) return false;
            if (this.groupType != null ? !this.groupType.equals(that.groupType) : that.groupType != null) return false;
            if (this.machineIdentifyType != null ? !this.machineIdentifyType.equals(that.machineIdentifyType) : that.machineIdentifyType != null) return false;
            if (this.machineList != null ? !this.machineList.equals(that.machineList) : that.machineList != null) return false;
            return this.projectName != null ? this.projectName.equals(that.projectName) : that.projectName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.groupAttribute != null ? this.groupAttribute.hashCode() : 0;
            result = 31 * result + (this.groupName != null ? this.groupName.hashCode() : 0);
            result = 31 * result + (this.groupType != null ? this.groupType.hashCode() : 0);
            result = 31 * result + (this.machineIdentifyType != null ? this.machineIdentifyType.hashCode() : 0);
            result = 31 * result + (this.machineList != null ? this.machineList.hashCode() : 0);
            result = 31 * result + (this.projectName != null ? this.projectName.hashCode() : 0);
            return result;
        }
    }
}

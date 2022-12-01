import Team from "../../models/team";

import {
  MutationCreateTeamArgs,
  MutationUpdateTeamArgs,
  Team as TeamType,
  TeamInput,
} from "../../generated/graphql";

const Query = {
  teams: async (): Promise<TeamType[]> => {
    try {
      const teams = await Team.find().exec();
      if (!teams) {
        throw new Error("Teams not found");
      }
      return teams;
    } catch (err) {
      throw err;
    }
  },
};

const Mutation = {
  createTeam: async (
    _: any,
    { teamInput }: MutationCreateTeamArgs
  ): Promise<TeamType> => {
    try {
      const team = await Team.findOne({ name: teamInput?.name });
      if (team) {
        throw new Error("Team already exists");
      }

      const newTeam = new Team({
        name: teamInput?.name,
        position: teamInput?.position,
        avatar: teamInput?.avatar,
        description: teamInput?.description,
        department: teamInput?.department,
      });

      const result = await newTeam.save();

      return { ...result._doc, password: null };
    } catch (err) {
      throw err;
    }
  },
  updateTeam: async (
    _: any,
    { teamId, teamInput }: MutationUpdateTeamArgs
  ): Promise<TeamType> => {
    try {
      const team = await Team.findByIdAndUpdate(
        { _id: teamId },
        teamInput as TeamInput,
        {
          new: true,
        }
      );
      if (!team) {
        throw new Error("Team not found");
      }
      return team;
    } catch (err) {
      throw err;
    }
  },
};

export const teamResolvers = {
  Query,
  Mutation,
};
